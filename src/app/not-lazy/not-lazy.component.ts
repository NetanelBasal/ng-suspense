import { Component } from '@angular/core';
import { timer } from 'rxjs';
import { useSuspense, Suspenseable } from '../types';

@Component({
  selector: 'app-not-lazy',
  templateUrl: './not-lazy.component.html',
  styleUrls: ['./not-lazy.component.scss'],
  providers: [useSuspense(NotLazyComponent)],
})
export class NotLazyComponent implements Suspenseable {
  setup() {
    return timer(3000);
  }
}
