import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-lev2',
  template: `
    <ng-template [ngIf]="true">
      <h3>Level 2</h3>
    </ng-template>

    <app-lev3></app-lev3>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Lev2Component { }
