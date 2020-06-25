import { Component } from '@angular/core';
import { FlowerService } from '../flower.service';
import { AnimalService } from '../animal.service';

@Component({
  selector: 'app-injector-inspector',
  templateUrl: './inspector.component.html',
  styleUrls: ['./inspector.component.less']
})
export class InspectorComponent {
  constructor(public flower: FlowerService, public animal: AnimalService) {}
}
