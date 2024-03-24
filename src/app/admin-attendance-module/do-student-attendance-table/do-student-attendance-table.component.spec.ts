import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoStudentAttendanceTableComponent } from './do-student-attendance-table.component';

describe('DoStudentAttendanceTableComponent', () => {
  let component: DoStudentAttendanceTableComponent;
  let fixture: ComponentFixture<DoStudentAttendanceTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoStudentAttendanceTableComponent]
    });
    fixture = TestBed.createComponent(DoStudentAttendanceTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
