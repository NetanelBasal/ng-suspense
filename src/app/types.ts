import { InjectionToken, Type } from '@angular/core';
import { ObservableInput } from 'rxjs';

export const SUSPENSE = new InjectionToken('SUSPENSE');

export interface Suspenseable {
  setup(): ObservableInput<any>;
}

export const useSuspense = (comp: Type<Suspenseable>) => ({
  provide: SUSPENSE,
  useExisting: comp,
});
