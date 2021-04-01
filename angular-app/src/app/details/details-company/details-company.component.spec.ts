import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DetailsCompanyComponent } from './details-company.component';

describe('DetailsCompanyComponent', () => {
  let component: DetailsCompanyComponent;
  let fixture: ComponentFixture<DetailsCompanyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
