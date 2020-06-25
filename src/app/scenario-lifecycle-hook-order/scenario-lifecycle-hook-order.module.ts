import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Example1Component } from './example1/example1.component';
import { SimpleTextModule } from '../simple-text/simple-text.module';
import { ScenarioLifecycleHookOrderComponent } from './scenario-lifecycle-hook-order.component';

@NgModule({
  declarations: [Example1Component, ScenarioLifecycleHookOrderComponent],
  imports: [
    CommonModule,
    SimpleTextModule
  ],
  exports: [ScenarioLifecycleHookOrderComponent]
})
export class ScenarioLifecycleHookOrderModule { }
