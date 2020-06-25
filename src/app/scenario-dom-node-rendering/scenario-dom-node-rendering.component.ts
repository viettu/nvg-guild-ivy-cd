import { Component, OnInit, ChangeDetectionStrategy, ElementRef } from '@angular/core';

@Component({
  selector: 'app-scenario-dom-node-rendering',
  template: `
    <app-lev1>
      <app-lev2></app-lev2>
    </app-lev1>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScenarioDomNodeRenderingComponent implements OnInit {

  constructor(private element: ElementRef) { }

  ngOnInit(): void {
    const numberOfSpanElement = (this.element.nativeElement as HTMLElement).querySelectorAll('h3').length;
    console.log(numberOfSpanElement);
  }

}
