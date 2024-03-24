import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentAttendanceSearchComponent } from './student-attendance-search/student-attendance-search.component';
import { StudentAttendanceTableComponent } from './student-attendance-table/student-attendance-table.component';
import { DoStudentAttendanceTableComponent } from './do-student-attendance-table/do-student-attendance-table.component';
import { DoStudentAttendanceComponent } from './do-student-attendance/do-student-attendance.component';



@NgModule({
  declarations: [
    StudentAttendanceSearchComponent,
    StudentAttendanceTableComponent,
    DoStudentAttendanceTableComponent,
    DoStudentAttendanceComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminAttendanceModuleModule { }
