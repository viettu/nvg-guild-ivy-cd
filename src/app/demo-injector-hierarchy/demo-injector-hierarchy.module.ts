import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { InspectorComponent } from './inspector/inspector.component';
import { DIDirective } from './di.directive';
import { DI1Directive } from './di1.directive';

@NgModule({
  declarations: [ ParentComponent, ChildComponent, InspectorComponent, DIDirective, DI1Directive ],
  imports: [
    CommonModule,
    BrowserModule, FormsModule
  ],
  providers: [],
  exports: [ParentComponent]
})
export class DemoInjectorHierarchyModule { }
