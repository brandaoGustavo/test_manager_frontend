import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCaseFormComponent } from './test-case-form.component';

describe('TestCaseFormComponent', () => {
  let component: TestCaseFormComponent;
  let fixture: ComponentFixture<TestCaseFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestCaseFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestCaseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
