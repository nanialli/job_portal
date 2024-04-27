import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherAttendanceTableComponent } from './teacher-attendance-table.component';

describe('TeacherAttendanceTableComponent', () => {
  let component: TeacherAttendanceTableComponent;
  let fixture: ComponentFixture<TeacherAttendanceTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeacherAttendanceTableComponent]
    });
    fixture = TestBed.createComponent(TeacherAttendanceTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
