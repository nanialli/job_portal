import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminAddUserModuleRoutingModule } from './admin-add-user-module-routing.module';
import { StuentTeacherAdminNavComponent } from './stuent-teacher-admin-nav/stuent-teacher-admin-nav.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { AddAdminComponent } from './add-admin/add-admin.component';


@NgModule({
  declarations: [
    StuentTeacherAdminNavComponent,
    AddStudentComponent,
    AddTeacherComponent,
    AddAdminComponent
  ],
  imports: [
    CommonModule,
    AdminAddUserModuleRoutingModule
  ]
})
export class AdminAddUserModuleModule { }
