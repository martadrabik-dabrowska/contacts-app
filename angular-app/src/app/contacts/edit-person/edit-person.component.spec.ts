import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EditPersonComponent } from './edit-person.component';

describe('EditPersonComponent', () => {
  let component: EditPersonComponent;
  let fixture: ComponentFixture<EditPersonComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
