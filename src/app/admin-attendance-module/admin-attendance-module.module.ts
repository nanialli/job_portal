import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminAttendanceModuleRoutingModule } from './admin-attendance-module-routing.module';
import { FormsModule } from '@angular/forms';
import { AttendanceTableComponent } from './attendance-table/attendance-table.component';


@NgModule({
  declarations: [
   
  
    AttendanceTableComponent
  ],
  imports: [
    CommonModule,
    AdminAttendanceModuleRoutingModule,
    FormsModule
  ]
})
export class AdminAttendanceModuleModule { }
