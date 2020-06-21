import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuspenseComponent } from './suspense.component';

describe('SuspenseComponent', () => {
  let component: SuspenseComponent;
  let fixture: ComponentFixture<SuspenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuspenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuspenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
