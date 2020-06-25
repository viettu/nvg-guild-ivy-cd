import { Component, ChangeDetectionStrategy } from '@angular/core';
import { StatusManagementService } from '../status-management.service';

@Component({
  selector: 'app-component-tree',
  templateUrl: './component-tree.component.html',
  styleUrls: ['./component-tree.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentTreeComponent {

  constructor(public statusManagement: StatusManagementService) { }
}
