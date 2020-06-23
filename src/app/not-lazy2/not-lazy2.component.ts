import { Component } from '@angular/core';

import { timer } from 'rxjs';
import { Suspenseable, useSuspense } from '../types';

@Component({
  selector: 'app-not-lazy2',
  templateUrl: './not-lazy2.component.html',
  styleUrls: ['./not-lazy2.component.scss'],
  providers: [useSuspense(NotLazy2Component)],
})
export class NotLazy2Component implements Suspenseable {
  setup() {
    return timer(5000);
  }
}
