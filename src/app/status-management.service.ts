import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { getSteps } from './states';

export enum ComponentName {
  None = 'None',
  Parent = 'Parent',
  Child = 'Child',
  NgFor_222222222 = 'NgFor_222222222',
  SubChild_222222222 = 'SubChild_222222222',
  NgFor_333333333 = 'NgFor_333333333',
  SubChild_333333333 = 'SubChild_333333333',
  SubChild_999999999 = 'SubChild_999999999'
}

export enum ActionName {
  None = 'None',
  SyncDOM = 'SyncDOM',
  AssignOrUpdateInputs = 'AssignOrUpdateInputs',
  ExecuteInitLifecycleHooks = 'ExecuteInitLifecycleHooks',
  SyncDynamicContents = 'SyncDynamicContents',
  AssignOrUpdateContentChildren = 'AssignOrUpdateContentChildren',
  ExecuteContentLifecycleHooks = 'ExecuteContentLifecycleHooks',
  SyncHostBindings = 'SyncHostBindings',
  CallCDProcessOnChildren = 'CallCDProcessOnChildren',
  AssignOrUpdateViewChildren = 'AssignOrUpdateViewChildren',
  ExecuteViewLifecycleHooks = 'ExecuteViewLifecycleHooks',
  ResetDirtyFlag = 'ResetDirtyFlag'
}

const ACTION_ORDERS = [
  'SyncDOM',
  'AssignOrUpdateInputs',
  'ExecuteInitLifecycleHooks',
  'SyncDynamicContents',
  'AssignOrUpdateContentChildren',
  'ExecuteContentLifecycleHooks',
  'SyncHostBindings',
  'CallCDProcessOnChildren',
  'AssignOrUpdateViewChildren',
  'ExecuteViewLifecycleHooks',
  'ResetDirtyFlag'
];

export interface AppStatus {
  component: ComponentName;
  action: ActionName;
}

@Injectable({
  providedIn: 'root',
})
export class StatusManagementService {
  private stepIndex = 0;
  private appStatusSource = new BehaviorSubject<AppStatus>({
    component: ComponentName.None,
    action: ActionName.None
  });

  readonly stepsDefinition: { [index: number]: AppStatus };
  readonly appStatusChange$: Observable<AppStatus>;

  get currentStepIndex(): number {
    return this.currentStepIndex;
  }

  constructor() {
    this.stepsDefinition = this.parseSteps(getSteps());
    this.appStatusChange$ = this.appStatusSource.asObservable();
  }

  setStep(step: number) {
    this.appStatusSource.next(this.stepsDefinition[step]);
    this.stepIndex = step;
  }

  next(): void {
    if (this.stepIndex < Object.keys(this.stepsDefinition).length - 1) {
      this.setStep(++this.stepIndex);
    }
  }

  previous(): void {
    if (this.stepIndex > 0) {
      this.setStep(--this.stepIndex);
    }
  }

  getCurrentAppStatus(): AppStatus {
    return this.appStatusSource.getValue();
  }

  isActive(status: string): boolean {
    if (!status) {
      return false;
    }
    const currentStatus = this.getCurrentAppStatus();
    const tokens = status.trim().split(',');
    return this.isNameEqual(tokens[0] || '*', currentStatus.component) && this.isNameEqual(tokens[1] || '*', currentStatus.action);
  }

  isActionBefore(action: string, compareTo: string): boolean {
    return ACTION_ORDERS.indexOf(action) < ACTION_ORDERS.indexOf(compareTo);
  }

  isActionAfter(action: string, compareTo: string): boolean {
    return ACTION_ORDERS.indexOf(action) > ACTION_ORDERS.indexOf(compareTo);
  }

  compareAction(action: string, compareTo: string): number {
    return ACTION_ORDERS.indexOf(action) - ACTION_ORDERS.indexOf(compareTo);
  }

  setActiveComponent(component: string): void {
    const statuses = Object.values(this.stepsDefinition);
    const foundIndex = statuses.findIndex(itm => {
      const componentName = `${itm.component}`;
      return componentName === component && itm.action === ActionName.None;
    });

    if (foundIndex >= 0) {
      this.setStep(foundIndex);
    }
  }

  private isNameEqual(source: string, enumText: string): boolean {
    if (!source || !enumText) {
      return false;
    }
    return source === '*' || source.trim() === enumText;
  }

  private parseSteps(steps: Array<string>) {
    const results: {
      [index: number]: {
        component: ComponentName;
        action: ActionName;
      };
    } = {};

    steps.forEach((val, idx) => {
      const tokens = val.split(',');
      results[idx] = {
        component: tokens[0].trim() as ComponentName,
        action: tokens[1].trim() as ActionName
      };
    });

    return results;
  }
}
