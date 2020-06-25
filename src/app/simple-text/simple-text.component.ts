import { Component, Input, ChangeDetectionStrategy, DoCheck } from '@angular/core';

@Component({
  selector: 'app-simple-text',
  template: `<span>{{text}}</span>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SimpleTextComponent implements DoCheck {
  @Input() text: string;

  ngDoCheck(): void {
    console.log(`[DOCHECK: ${this.text}]`);
  }
}
