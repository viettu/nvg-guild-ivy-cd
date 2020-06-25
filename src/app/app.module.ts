import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentLayoutComponent } from './component-layout/component-layout.component';
import { UiStatusDirective } from './ui-status.directive';
import { ComponentTreeComponent } from './component-tree/component-tree.component';
import { DemoCodeModule } from './demo-code/demo-code.module';
import { CdDemoComponentsModule } from './cd-demo-components/cd-demo-components.module';
import { DemoInjectorHierarchyModule } from './demo-injector-hierarchy/demo-injector-hierarchy.module';
import { ScenarioContentQueriesModule } from './scenario-content-queries/scenario-content-queries.module';

@NgModule({
  declarations: [
    AppComponent,
    UiStatusDirective,
    ComponentLayoutComponent,
    ComponentTreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DemoCodeModule,
    CdDemoComponentsModule,
    DemoInjectorHierarchyModule,
    ScenarioContentQueriesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
