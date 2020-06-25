import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
   <h2>Child<span>{{prop1}}</span></h2>
   <app-sub-child [item]="999999999"></app-sub-child>
   <app-sub-child *ngFor="let item of items" [item]="item"></app-sub-child>

  `
})
export class ChildComponent {
  @Input() prop1: number;
  items = [222222222, 333333333];
}
