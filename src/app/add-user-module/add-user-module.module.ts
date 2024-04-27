import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddUserModuleRoutingModule } from './add-user-module-routing.module';
import { AdminTeacherStudentNavComponent } from './admin-teacher-student-nav/admin-teacher-student-nav.component';
import { AddAdminFormComponent } from './add-admin-form/add-admin-form.component';
import { AddTeacherFormComponent } from './add-teacher-form/add-teacher-form.component';
import { AddStudentFormComponent } from './add-student-form/add-student-form.component';


@NgModule({
  declarations: [
    AdminTeacherStudentNavComponent,
    AddAdminFormComponent,
    AddTeacherFormComponent,
    AddStudentFormComponent
  ],
  imports: [
    CommonModule,
    AddUserModuleRoutingModule
  ]
})
export class AddUserModuleModule { }
