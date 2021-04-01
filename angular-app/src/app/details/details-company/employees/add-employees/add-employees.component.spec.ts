import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddEmployeesComponent } from './add-employees.component';

describe('AddEmployeesComponent', () => {
  let component: AddEmployeesComponent;
  let fixture: ComponentFixture<AddEmployeesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEmployeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
