import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAtttendanceComponent } from './admin-atttendance.component';

describe('AdminAtttendanceComponent', () => {
  let component: AdminAtttendanceComponent;
  let fixture: ComponentFixture<AdminAtttendanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminAtttendanceComponent]
    });
    fixture = TestBed.createComponent(AdminAtttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
