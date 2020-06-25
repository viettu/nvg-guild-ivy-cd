import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScenarioContentQueriesComponent } from './scenario-content-queries.component';
import { SimpleTextModule } from '../simple-text/simple-text.module';
import { SimpleContainerModule } from '../simple-container/simple-container.module';
import { ChildComponent } from './child/child.component';
import { SubChildComponent } from './sub-child/sub-child.component';



@NgModule({
  declarations: [ScenarioContentQueriesComponent, ChildComponent, SubChildComponent],
  imports: [
    CommonModule,
    SimpleTextModule,
    SimpleContainerModule
  ],
  exports: [ScenarioContentQueriesComponent]
})
export class ScenarioContentQueriesModule { }
