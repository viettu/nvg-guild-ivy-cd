import { Component } from '@angular/core';

@Component({
  selector: 'app-example1',
  template: `
    <ng-container>
      <app-simple-text [text]="'text 1'"></app-simple-text>
    </ng-container>

    <ng-content></ng-content>

    <ng-template [ngIf]="true">
      <app-simple-text [text]="'text 2'"></app-simple-text>
    </ng-template>

    <app-simple-text [text]="'text 3'"></app-simple-text>
  `
})
export class Example1Component { }
