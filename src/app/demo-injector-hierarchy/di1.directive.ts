import { Directive } from '@angular/core';
import { FlowerService } from './flower.service';

@Directive({
  selector: '[appDI1]',
  providers: [{ provide: FlowerService, useValue: { emoji: '(DIRECITVE-PROVIDER) 🌸' } }],
})
export class DI1Directive { }
