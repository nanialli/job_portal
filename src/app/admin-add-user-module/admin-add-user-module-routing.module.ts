import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StuentTeacherAdminNavComponent } from './stuent-teacher-admin-nav/stuent-teacher-admin-nav.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
const routes: Routes = [
  {path:"", component:StuentTeacherAdminNavComponent,children:[
    {path:"student",component:AddStudentComponent},
    {path:"teacher", component:AddTeacherComponent},
    {path:"admin", component:AddAdminComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminAddUserModuleRoutingModule { }
