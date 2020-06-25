import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleContainerComponent } from './simple-container.component';



@NgModule({
  declarations: [SimpleContainerComponent],
  imports: [
    CommonModule
  ],
  exports: [SimpleContainerComponent]
})
export class SimpleContainerModule { }
