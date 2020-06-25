import { Component, ChangeDetectionStrategy, ContentChildren } from '@angular/core';

@Component({
  selector: 'app-simple-container',
  template: `
    <ng-content></ng-content>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimpleContainerComponent {
  // @ContentChildren(C)

 }
