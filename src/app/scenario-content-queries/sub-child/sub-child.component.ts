import { Component, OnInit, ChangeDetectionStrategy, Input, TemplateRef, ContentChildren, QueryList } from '@angular/core';
import { SimpleTextComponent } from '../../simple-text/simple-text.component';

@Component({
  selector: 'app-sub-child',
  template: `
    <ng-container *ngTemplateOutlet="contentTemplate"></ng-container>
    <span id="length">{{children.length}}<span>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubChildComponent implements OnInit {

  @Input() contentTemplate: TemplateRef<any>;

  @ContentChildren(SimpleTextComponent, {descendants: true}) children: QueryList<SimpleTextComponent>;

  constructor() { }

  ngOnInit(): void {
  }

}
