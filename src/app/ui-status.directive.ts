import { Directive, OnDestroy, HostBinding, Input, OnInit, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { StatusManagementService } from './status-management.service';

@Directive({
  selector: '[appUiStatus]'
})
export class UiStatusDirective implements OnInit, OnChanges, OnDestroy {
  private destroy$ = new Subject();

  @HostBinding('class.active') isActive: boolean;

  @Input() appUiStatus: string;

  constructor(private statusManagement: StatusManagementService, private cdr: ChangeDetectorRef) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.isActive = this.statusManagement.isActive(this.appUiStatus);
  }

  ngOnInit(): void {
    this.statusManagement.appStatusChange$.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.isActive = this.statusManagement.isActive(this.appUiStatus);
      this.cdr.markForCheck();
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
