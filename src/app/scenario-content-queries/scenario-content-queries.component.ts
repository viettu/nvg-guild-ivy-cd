import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-scenario-content-queries',
  template: `
    <app-child>
      <app-simple-text [text]="'Text 5'"></app-simple-text>
    </app-child>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScenarioContentQueriesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
