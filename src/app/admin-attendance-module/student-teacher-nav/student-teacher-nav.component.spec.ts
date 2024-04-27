import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentTeacherNavComponent } from './student-teacher-nav.component';

describe('StudentTeacherNavComponent', () => {
  let component: StudentTeacherNavComponent;
  let fixture: ComponentFixture<StudentTeacherNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentTeacherNavComponent]
    });
    fixture = TestBed.createComponent(StudentTeacherNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
