import { ComponentFixture, TestBed } from '@angular/core/testing';

import { User27Component } from './user27.component';

describe('User27Component', () => {
  let component: User27Component;
  let fixture: ComponentFixture<User27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ User27Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(User27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
