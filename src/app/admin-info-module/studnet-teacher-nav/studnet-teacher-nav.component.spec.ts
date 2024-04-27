import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudnetTeacherNavComponent } from './studnet-teacher-nav.component';

describe('StudnetTeacherNavComponent', () => {
  let component: StudnetTeacherNavComponent;
  let fixture: ComponentFixture<StudnetTeacherNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudnetTeacherNavComponent]
    });
    fixture = TestBed.createComponent(StudnetTeacherNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
