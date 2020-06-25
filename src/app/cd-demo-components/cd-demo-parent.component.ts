import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
   <h2>Parent</h2>
   <app-child [prop1]="x"></app-child>
  `
})
export class ParentComponent {
  x = 111111111;
}
