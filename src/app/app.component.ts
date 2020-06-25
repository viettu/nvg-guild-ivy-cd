import {
  Component,
  OnInit,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
} from '@angular/core';
import { StatusManagementService } from './status-management.service';

const CD_ORDERS = [
  'None',
  'Parent',
  'Child',
  'NgFor_222222222',
  'SubChild_222222222',
  'NgFor_333333333',
  'SubChild_333333333',
  'SubChild_999999999',
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  public previousComponent = '';
  public currentComponent = '';
  public nextComponent = '';

  title = 'nvg-guild-ivy-cd';

  public parentTemplate = ` @Component({
    selector: 'app-parent',
    template: \`
     <h2>Parent</h2>
     <app-child [prop1]="x"></app-child>
    \`
  })
  export class ParentComponent {
    x = 111111111;
  }
  `;

  public childTemplate = ` @Component({
    selector: 'app-child',
    template: \`
    <h2>Child<span>{{prop1}}</span></h2>
    <app-sub-child [item]="999999999"></app-sub-child>
    <app-sub-child *ngFor="let item of items" [item]="item"></app-sub-child>
    \`
  })
  export class ChildComponent {
    @Input() prop1: number;
    items = [222222222, 333333333];
  }
  `;

  public subChildTemplate = ` @Component({
    selector: 'app-sub-child',
    template: \`
     <h2>Sub-Child<span>{{item}}</span></h2>
    \`
  })
  export class SubChildComponent {
    @Input() item: number;
  }
  `;

  constructor(
    public statusManagement: StatusManagementService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.statusManagement.appStatusChange$.subscribe((status) => {
      this.currentComponent = status.component;
      const orderIdx = CD_ORDERS.indexOf(this.currentComponent);
      this.previousComponent =
        orderIdx - 1 < 0 ? 'None' : CD_ORDERS[orderIdx - 1];
      this.nextComponent =
        orderIdx + 1 >= CD_ORDERS.length ? 'None' : CD_ORDERS[orderIdx + 1];
      this.cdr.markForCheck();
    });
  }
}
