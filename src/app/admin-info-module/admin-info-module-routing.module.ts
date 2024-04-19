import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudnetTeacherNavComponent } from './studnet-teacher-nav/studnet-teacher-nav.component';
import { StudentInfoComponent } from '../student-info/student-info.component';
import { TeacherInfoComponent } from './teacher-info/teacher-info.component';

const routes: Routes = [
  {path:"",component:StudnetTeacherNavComponent,children:[
    {path:"student",component:StudentInfoComponent},
    {path:"teacher", component:TeacherInfoComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminInfoModuleRoutingModule { }
