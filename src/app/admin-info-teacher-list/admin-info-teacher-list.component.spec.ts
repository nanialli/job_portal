import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInfoTeacherListComponent } from './admin-info-teacher-list.component';

describe('AdminInfoTeacherListComponent', () => {
  let component: AdminInfoTeacherListComponent;
  let fixture: ComponentFixture<AdminInfoTeacherListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminInfoTeacherListComponent]
    });
    fixture = TestBed.createComponent(AdminInfoTeacherListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
