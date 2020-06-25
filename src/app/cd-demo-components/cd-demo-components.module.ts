import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './cd-demo-child.component';
import { SubChildComponent } from './cd-demo-subchild.component';
import { ParentComponent } from './cd-demo-parent.component';


@NgModule({
  declarations: [
    ParentComponent,
    ChildComponent,
    SubChildComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ParentComponent,
    ChildComponent,
    SubChildComponent
  ]
})
export class CdDemoComponentsModule { }
