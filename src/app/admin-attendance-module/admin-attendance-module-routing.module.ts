import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { StudentTeacherNavComponent } from './student-teacher-nav/student-teacher-nav.component';
import { StudentAttendanceTableComponent } from './student-attendance-table/student-attendance-table.component';
import { TeacherAttendanceTableComponent } from './teacher-attendance-table/teacher-attendance-table.component';

const routes: Routes = [
  {path:"",component:StudentTeacherNavComponent, children:[
    {path:"student" , component:StudentAttendanceTableComponent},
    {path:"teacher", component:TeacherAttendanceTableComponent}
  ]},

=======
import { AttendanceTableComponent } from './attendance-table/attendance-table.component';

const routes: Routes = [
  {path:"", component:AttendanceTableComponent}
>>>>>>> df72948edd1a7b0bd6f8e3487ab7027ea24321b5
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminAttendanceModuleRoutingModule { }
