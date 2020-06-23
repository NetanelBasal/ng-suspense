import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotLazyComponent } from './not-lazy.component';

describe('NotLazyComponent', () => {
  let component: NotLazyComponent;
  let fixture: ComponentFixture<NotLazyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotLazyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
