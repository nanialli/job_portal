import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTimeTableComponent } from './admin-time-table.component';

describe('AdminTimeTableComponent', () => {
  let component: AdminTimeTableComponent;
  let fixture: ComponentFixture<AdminTimeTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminTimeTableComponent]
    });
    fixture = TestBed.createComponent(AdminTimeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
