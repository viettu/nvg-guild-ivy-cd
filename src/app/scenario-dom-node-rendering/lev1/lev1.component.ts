import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-lev1',
  template: `
    <ng-container>
      <h3>Level 1</h3>
    </ng-container>

    <ng-content></ng-content>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Lev1Component { }
