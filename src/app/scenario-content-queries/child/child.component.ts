import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <app-sub-child>
      <app-simple-text [text]="'Text 1'"></app-simple-text>

      <app-simple-container>
        <app-simple-text [text]="'Text 2'"></app-simple-text>
      </app-simple-container>

      <ng-template [ngIf]="true">
        <app-simple-text [text]="'Text 3'"></app-simple-text>
      </ng-template>

      <ng-container>
        <app-simple-text [text]="'Text 4'"></app-simple-text>
      </ng-container>

      <ng-content></ng-content>

    </app-sub-child>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
