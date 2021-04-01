import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WayOfObtainingComponent } from './way-of-obtaining.component';

describe('WayOfObtainingComponent', () => {
  let component: WayOfObtainingComponent;
  let fixture: ComponentFixture<WayOfObtainingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WayOfObtainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WayOfObtainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
