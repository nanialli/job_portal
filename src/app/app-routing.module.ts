import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContectUsComponent } from './contect-us/contect-us.component';
import { ServicesComponent } from './services/services.component';

import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { AdminInfoComponent } from './admin-info/admin-info.component';
import { AdminAtttendanceComponent } from './admin-atttendance/admin-atttendance.component';
import { UpdateEventComponent } from './update-event/update-event.component';
import { AdminTimeTableComponent } from './admin-time-table/admin-time-table.component';
import { PaymentsComponent } from './payments/payments.component';
import { LogInComponent } from './log-in/log-in.component';
import { AddUserComponent } from './add-user/add-user.component';
import { TeacherNavComponent } from './teacher-nav/teacher-nav.component';
import { TeacherAttendanceComponent } from './teacher-attendance/teacher-attendance.component';
import { TeacherTimeTableComponent } from './teacher-time-table/teacher-time-table.component';
import { StudentInfoComponent } from './student-info/student-info.component';
import { TeacherProfileComponent } from './teacher-profile/teacher-profile.component';
import { EventsComponent } from './events/events.component';
import { StudentNavComponent } from './student-nav/student-nav.component';
import { StudentTimeTableComponent } from './student-time-table/student-time-table.component';
import { StudentPaymentsComponent } from './student-payments/student-payments.component';
import { StudentWorksComponent } from './student-works/student-works.component';
import { StudentTeacherInfoComponent } from './student-teacher-info/student-teacher-info.component';
import { StudentAttendanceComponent } from './student-attendance/student-attendance.component';
import { AdminInfoStudentInfoComponent } from './admin-info-student-info/admin-info-student-info.component';
import { AdminInfoStudentListComponent } from './admin-info-student-list/admin-info-student-list.component';


const routes: Routes = [
  {path:"",component:MainNavComponent,children:[
    {path:"",redirectTo:"home",pathMatch:'full'},
    {path:"home",component:HomeComponent},
    {path:"aboutus",component:AboutUsComponent},
    {path:"contectus",component:ContectUsComponent},
    {path:"services",component:ServicesComponent}
  ]},
  {path:"login",component:LogInComponent,children:[
    {path:"admin",component:AdminNavComponent,children:[
      {path:"",redirectTo:"info",pathMatch:'prefix'},
      {path:"info", loadChildren: () => import('./admin-info-module/admin-info-module.module').then(m => m.AdminInfoModuleModule)},
      {path:"attendance",component:AdminAtttendanceComponent, },
      {path:"event",component:UpdateEventComponent},
      {path:"user",component:AddUserComponent},
      {path:"timetable",component:AdminTimeTableComponent},
      {path:"payments",component:PaymentsComponent}
    ]},
    {path:"teacher",component:TeacherNavComponent,children:[
      {path:"",redirectTo:"attendance",pathMatch:'prefix'},
      {path:"attendance",component:TeacherAttendanceComponent},
      {path:"timetable",component:TeacherTimeTableComponent},
      {path:"students-info",component:StudentInfoComponent},
      {path:"profile",component:TeacherProfileComponent},
      {path:"events",component:EventsComponent}
    ]},
    {path:"student",component:StudentNavComponent,children:[
      {path:"",redirectTo:"info",pathMatch:'prefix'},
      {path:"info",component:StudentInfoComponent,children:[
        
        
      ]},
      {path:"timetable",component:StudentTimeTableComponent},
      {path:"attendance",component:StudentInfoComponent},
      {path:"payments",component:StudentPaymentsComponent},
      {path:"works",component:StudentWorksComponent},
      {path:"events",component:EventsComponent}
    ]},
    
    
  ]}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const allcomponents=[ MainHeaderComponent,
  MainNavComponent,
  HomeComponent,
  AboutUsComponent,
  ContectUsComponent,
  ServicesComponent,
  AdminNavComponent,
  AdminInfoComponent,
  AdminAtttendanceComponent,
  UpdateEventComponent,
  AdminTimeTableComponent,
  PaymentsComponent,
  LogInComponent,
  AddUserComponent,
  TeacherNavComponent,
  TeacherAttendanceComponent,
  TeacherTimeTableComponent,
  StudentInfoComponent,
  TeacherProfileComponent,
  EventsComponent,
  StudentNavComponent,
  StudentTimeTableComponent,
  StudentAttendanceComponent,
  StudentPaymentsComponent,
  StudentWorksComponent,
  StudentTeacherInfoComponent,
  AdminInfoStudentListComponent,
  AdminInfoStudentInfoComponent,
]
