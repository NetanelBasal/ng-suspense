import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotLazy2Component } from './not-lazy2.component';

describe('NotLazy2Component', () => {
  let component: NotLazy2Component;
  let fixture: ComponentFixture<NotLazy2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotLazy2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotLazy2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
