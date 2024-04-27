import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminAttendanceModuleRoutingModule } from './admin-attendance-module-routing.module';
import { StudentAttendanceSearchComponent } from './student-attendance-search/student-attendance-search.component';
import { StudentAttendanceTableComponent } from './student-attendance-table/student-attendance-table.component';
import { DoStudentAttendanceTableComponent } from './do-student-attendance-table/do-student-attendance-table.component';
import { DoStudentAttendanceComponent } from './do-student-attendance/do-student-attendance.component';
import { StudentTeacherNavComponent } from './student-teacher-nav/student-teacher-nav.component';
import { TeacherAttendanceTableComponent } from './teacher-attendance-table/teacher-attendance-table.component';


@NgModule({
  declarations: [
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
  ]
})
export class AdminAttendanceModuleModule { }
