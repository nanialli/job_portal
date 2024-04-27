import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminAddUserModuleRoutingModule } from './admin-add-user-module-routing.module';
import { AddStudentComponent } from './add-user/add-student.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    
    AddStudentComponent,
  ],
  imports: [
    CommonModule,
    AdminAddUserModuleRoutingModule,
    FormsModule
  ]
})
export class AdminAddUserModuleModule { }
