import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInfoStudentListComponent } from './admin-info-student-list.component';

describe('AdminInfoStudentListComponent', () => {
  let component: AdminInfoStudentListComponent;
  let fixture: ComponentFixture<AdminInfoStudentListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminInfoStudentListComponent]
    });
    fixture = TestBed.createComponent(AdminInfoStudentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
