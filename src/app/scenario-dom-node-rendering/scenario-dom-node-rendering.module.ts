import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScenarioDomNodeRenderingComponent } from './scenario-dom-node-rendering.component';
import { Lev1Component } from './lev1/lev1.component';
import { Lev2Component } from './lev2/lev2.component';
import { Lev3Component } from './lev3/lev3.component';



@NgModule({
  declarations: [ScenarioDomNodeRenderingComponent, Lev1Component, Lev2Component, Lev3Component],
  imports: [
    CommonModule
  ],
  exports: [ScenarioDomNodeRenderingComponent]
})
export class ScenarioDomNodeRenderingModule { }
