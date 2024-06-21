import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCaseManagerComponent } from './test-case-manager.component';

describe('TestCaseManagerComponent', () => {
  let component: TestCaseManagerComponent;
  let fixture: ComponentFixture<TestCaseManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestCaseManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestCaseManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
