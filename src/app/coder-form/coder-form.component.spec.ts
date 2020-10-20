import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoderFormComponent } from './coder-form.component';

describe('CoderFormComponent', () => {
  let component: CoderFormComponent;
  let fixture: ComponentFixture<CoderFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoderFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
