import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleTextComponent } from './simple-text.component';



@NgModule({
  declarations: [SimpleTextComponent],
  imports: [
    CommonModule
  ],
  exports: [SimpleTextComponent]
})
export class SimpleTextModule { }
