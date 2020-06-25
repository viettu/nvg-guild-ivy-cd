import { Directive } from '@angular/core';
import { FlowerService } from './flower.service';

@Directive({
  selector: '[appDI]',
  providers: [{ provide: FlowerService, useValue: { emoji: '(DIRECITVE-PROVIDER) 🍀' } }],
})
export class DIDirective { }
