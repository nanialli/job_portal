import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInfoStudentInfoComponent } from './admin-info-student-info.component';

describe('AdminInfoStudentInfoComponent', () => {
  let component: AdminInfoStudentInfoComponent;
  let fixture: ComponentFixture<AdminInfoStudentInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminInfoStudentInfoComponent]
    });
    fixture = TestBed.createComponent(AdminInfoStudentInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
