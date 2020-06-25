import { Component } from '@angular/core';
import { FlowerService } from '../flower.service';
import { AnimalService } from '../animal.service';


@Component({
  selector: 'app-injector-parent',
  templateUrl: './parent.component.html',
  styleUrls: [ './parent.component.less' ]
})
export class ParentComponent  {
  constructor(public flower: FlowerService, public animal: AnimalService) {}
}

// When using @Host() together with @SkipSelf() in
// child.component.ts for the AnimalService, add the
// following viewProviders array to the @Component metadata:

// viewProviders: [{ provide: AnimalService, useValue: { emoji: '🦔' } }]

// So, the entire @ChildComponent() decorator and its
// metadata should be as follows:

// @Component({
//   selector: 'app-injector-parent',
//   templateUrl: './parent.component.html',
//   styleUrls: [ './parent.component.less' ],
//   viewProviders: [{ provide: AnimalService, useValue: { emoji: '🦔' } }]
// })
