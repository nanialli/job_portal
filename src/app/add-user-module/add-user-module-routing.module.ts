import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminTeacherStudentNavComponent } from './admin-teacher-student-nav/admin-teacher-student-nav.component';
import { AddStudentFormComponent } from './add-student-form/add-student-form.component';
import { AddTeacherFormComponent } from './add-teacher-form/add-teacher-form.component';
import { AddAdminFormComponent } from './add-admin-form/add-admin-form.component';

const routes: Routes = [
  {path:"",component:AdminTeacherStudentNavComponent,children:[
  
    {path:"addStudent",component:AddStudentFormComponent},
    {path:"addTeacher", component:AddTeacherFormComponent},
    {path:"addAdmin", component:AddAdminFormComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddUserModuleRoutingModule { }
