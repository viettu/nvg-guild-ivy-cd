import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-component-layout',
  templateUrl: './component-layout.component.html'
})
export class ComponentLayoutComponent {
  @Input() title: string;
  @Input() component: string;
  @Input() childComponent: string;
}
