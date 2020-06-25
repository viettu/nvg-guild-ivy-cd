import {
  Component,
  Input,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  OnDestroy,
} from '@angular/core';
import {
  StatusManagementService,
  AppStatus,
} from '../status-management.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import {
  ROOT_TEMPLATE,
  PARENT_TEMPLATE,
  CHILD_TEMPLATE,
  NGFOR_222222222_TEMPLATE,
  NGFOR_333333333_TEMPLATE,
  SUBCHILD_222222222_TEMPLATE,
  SUBCHILD_333333333_TEMPLATE,
  SUBCHILD_999999999_TEMPLATE,
} from '../states';

@Component({
  selector: 'app-demo-code',
  templateUrl: 'demo-code.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoCodeComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject();

  @Input() htmlTemplate: string;

  constructor(
    private statusManagement: StatusManagementService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.htmlTemplate = ROOT_TEMPLATE;

    this.statusManagement.appStatusChange$
      .pipe(takeUntil(this.destroy$))
      .subscribe((status) => {
        this.setHtmlTemplate(status);
        this.cdr.markForCheck();
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private setHtmlTemplate(appStatus: AppStatus): void {
    const component = `${appStatus.component}`;
    const action = `${appStatus.action}`;

    if (`${appStatus.component}` === 'Root') {
      this.htmlTemplate = ``;
      this.cdr.markForCheck();
    }

    if (component === 'Parent') {
      if (this.statusManagement.isActionBefore(action, 'SyncDOM')) {
        this.htmlTemplate = ROOT_TEMPLATE;
      } else if (this.statusManagement.isActionAfter(action, 'SyncDOM')) {
        this.htmlTemplate = PARENT_TEMPLATE;
      }
    } else if (component === 'Child') {
      if (this.statusManagement.isActionBefore(action, 'SyncDOM')) {
        this.htmlTemplate = PARENT_TEMPLATE;
      } else if (this.statusManagement.isActionAfter(action, 'SyncDOM')) {
        this.htmlTemplate = CHILD_TEMPLATE;
      }
    } else if (component === 'NgFor_222222222') {
      if (this.statusManagement.isActionBefore(action, 'SyncDOM')) {
        this.htmlTemplate = CHILD_TEMPLATE;
      } else if (this.statusManagement.isActionAfter(action, 'SyncDOM')) {
        this.htmlTemplate = NGFOR_222222222_TEMPLATE;
      }
    } else if (component === 'SubChild_222222222') {
      if (this.statusManagement.isActionBefore(action, 'SyncDOM')) {
        this.htmlTemplate = NGFOR_222222222_TEMPLATE;
      } else if (this.statusManagement.isActionAfter(action, 'SyncDOM')) {
        this.htmlTemplate = SUBCHILD_222222222_TEMPLATE;
      }
    } else if (component === 'NgFor_333333333') {
      if (this.statusManagement.isActionBefore(action, 'SyncDOM')) {
        this.htmlTemplate = SUBCHILD_222222222_TEMPLATE;
      } else if (this.statusManagement.isActionAfter(action, 'SyncDOM')) {
        this.htmlTemplate = NGFOR_333333333_TEMPLATE;
      }
    } else if (component === 'SubChild_333333333') {
      if (this.statusManagement.isActionBefore(action, 'SyncDOM')) {
        this.htmlTemplate = NGFOR_333333333_TEMPLATE;
      } else if (this.statusManagement.isActionAfter(action, 'SyncDOM')) {
        this.htmlTemplate = SUBCHILD_333333333_TEMPLATE;
      }
    } else if (component === 'SubChild_111111111') {
      if (this.statusManagement.isActionBefore(action, 'SyncDOM')) {
        this.htmlTemplate = SUBCHILD_333333333_TEMPLATE;
      } else if (this.statusManagement.isActionAfter(action, 'SyncDOM')) {
        this.htmlTemplate = SUBCHILD_999999999_TEMPLATE;
      }
    }
  }
}
