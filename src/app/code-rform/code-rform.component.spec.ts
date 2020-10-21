import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeRFormComponent } from './code-rform.component';

describe('CodeRFormComponent', () => {
  let component: CodeRFormComponent;
  let fixture: ComponentFixture<CodeRFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeRFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeRFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
