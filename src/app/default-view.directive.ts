import { Directive, Input, Type } from '@angular/core';
import { Suspenseable } from './suspense/suspense.component';

@Directive({
  selector: '[defaultView]',
})
export class DefaultViewDirective {
  @Input('defaultView') fetch: () => Promise<{ default: Type<Suspenseable> }>;
}
