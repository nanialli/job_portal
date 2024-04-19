import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StuentTeacherAdminNavComponent } from './stuent-teacher-admin-nav.component';

describe('StuentTeacherAdminNavComponent', () => {
  let component: StuentTeacherAdminNavComponent;
  let fixture: ComponentFixture<StuentTeacherAdminNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StuentTeacherAdminNavComponent]
    });
    fixture = TestBed.createComponent(StuentTeacherAdminNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
