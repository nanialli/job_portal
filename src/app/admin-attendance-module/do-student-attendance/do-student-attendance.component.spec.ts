import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoStudentAttendanceComponent } from './do-student-attendance.component';

describe('DoStudentAttendanceComponent', () => {
  let component: DoStudentAttendanceComponent;
  let fixture: ComponentFixture<DoStudentAttendanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoStudentAttendanceComponent]
    });
    fixture = TestBed.createComponent(DoStudentAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
