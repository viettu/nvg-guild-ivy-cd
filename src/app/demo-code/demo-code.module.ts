import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

import { DemoCodeComponent } from './demo-code.component';

export function getHighlightLanguages() {
  return {
    typescript: () => import('highlight.js/lib/languages/typescript.js'),
    css: () => import('highlight.js/lib/languages/css'),
    xml: () => import('highlight.js/lib/languages/xml')
  };
}

@NgModule({
  imports: [
    CommonModule,
    HighlightModule
  ],
  declarations: [DemoCodeComponent],
  exports: [DemoCodeComponent, HighlightModule],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        lineNumbers: true,
        // languages: getHighlightLanguages()
      }
    }
  ]
})
export class DemoCodeModule {}
