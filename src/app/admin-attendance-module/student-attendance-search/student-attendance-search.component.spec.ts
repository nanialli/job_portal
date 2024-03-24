import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAttendanceSearchComponent } from './student-attendance-search.component';

describe('StudentAttendanceSearchComponent', () => {
  let component: StudentAttendanceSearchComponent;
  let fixture: ComponentFixture<StudentAttendanceSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentAttendanceSearchComponent]
    });
    fixture = TestBed.createComponent(StudentAttendanceSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
