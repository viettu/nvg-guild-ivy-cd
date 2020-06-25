import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-scenario-lifecycle-hook-order',
  template: `
    <app-example1>
      <app-simple-text [text]="'text 0'"></app-simple-text>
    </app-example1>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScenarioLifecycleHookOrderComponent { }
