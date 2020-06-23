import { Directive, Input, Type } from '@angular/core';
import { Suspenseable } from './types';

@Directive({
  selector: '[defaultView]',
})
export class DefaultViewDirective {
  @Input('defaultView') fetch: () => Promise<{ default: Type<Suspenseable> }>;
}
