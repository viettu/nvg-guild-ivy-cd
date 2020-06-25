import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sub-child',
  template: `
   <h2>Sub-Child<span>{{item}}</span></h2>
  `
})
export class SubChildComponent {
  @Input() item: number;
}
