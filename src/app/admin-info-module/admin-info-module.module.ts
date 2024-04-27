import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminInfoModuleRoutingModule } from './admin-info-module-routing.module';
import { StudnetTeacherNavComponent } from './studnet-teacher-nav/studnet-teacher-nav.component';
import { StudentInfoComponent } from './student-info/student-info.component';
import { TeacherInfoComponent } from './teacher-info/teacher-info.component';

import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    StudnetTeacherNavComponent,
    StudentInfoComponent,
    TeacherInfoComponent
  ],
  imports: [
    CommonModule,
    AdminInfoModuleRoutingModule,
    RouterModule
  ]
})
export class AdminInfoModuleModule { }
