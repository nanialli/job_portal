import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminAttendanceModuleRoutingModule } from './admin-attendance-module-routing.module';
<<<<<<< HEAD
import { StudentAttendanceSearchComponent } from './student-attendance-search/student-attendance-search.component';
import { StudentAttendanceTableComponent } from './student-attendance-table/student-attendance-table.component';
import { DoStudentAttendanceTableComponent } from './do-student-attendance-table/do-student-attendance-table.component';
import { DoStudentAttendanceComponent } from './do-student-attendance/do-student-attendance.component';
import { StudentTeacherNavComponent } from './student-teacher-nav/student-teacher-nav.component';
import { TeacherAttendanceTableComponent } from './teacher-attendance-table/teacher-attendance-table.component';
=======
import { FormsModule } from '@angular/forms';
import { AttendanceTableComponent } from './attendance-table/attendance-table.component';
>>>>>>> df72948edd1a7b0bd6f8e3487ab7027ea24321b5


@NgModule({
  declarations: [
<<<<<<< HEAD
    StudentAttendanceSearchComponent,
    StudentAttendanceTableComponent,
    DoStudentAttendanceTableComponent,
    DoStudentAttendanceComponent,
    StudentTeacherNavComponent,
    TeacherAttendanceTableComponent,
   
    
  ],
  imports: [
    CommonModule,
    AdminAttendanceModuleRoutingModule
=======
   
  
    AttendanceTableComponent
  ],
  imports: [
    CommonModule,
    AdminAttendanceModuleRoutingModule,
    FormsModule
>>>>>>> df72948edd1a7b0bd6f8e3487ab7027ea24321b5
  ]
})
export class AdminAttendanceModuleModule { }
