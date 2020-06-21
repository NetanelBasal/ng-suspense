import { Component } from '@angular/core';
import { Suspenseable } from '../suspense/suspense.component';

function delay(time: number) {
  return new Promise((r) => {
    setTimeout(r, time);
  });
}

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export default class TestComponent implements Suspenseable {
  async setup() {
    await delay(3000);
  }
}
