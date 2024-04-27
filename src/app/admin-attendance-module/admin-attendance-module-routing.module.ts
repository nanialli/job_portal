import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentTeacherNavComponent } from './student-teacher-nav/student-teacher-nav.component';
import { StudentAttendanceTableComponent } from './student-attendance-table/student-attendance-table.component';
import { TeacherAttendanceTableComponent } from './teacher-attendance-table/teacher-attendance-table.component';

const routes: Routes = [
  {path:"",component:StudentTeacherNavComponent, children:[
    {path:"student" , component:StudentAttendanceTableComponent},
    {path:"teacher", component:TeacherAttendanceTableComponent}
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminAttendanceModuleRoutingModule { }
