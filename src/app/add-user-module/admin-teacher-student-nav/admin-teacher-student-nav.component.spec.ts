import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTeacherStudentNavComponent } from './admin-teacher-student-nav.component';

describe('AdminTeacherStudentNavComponent', () => {
  let component: AdminTeacherStudentNavComponent;
  let fixture: ComponentFixture<AdminTeacherStudentNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminTeacherStudentNavComponent]
    });
    fixture = TestBed.createComponent(AdminTeacherStudentNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
