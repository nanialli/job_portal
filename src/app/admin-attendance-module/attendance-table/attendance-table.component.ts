import { Component } from '@angular/core';
import { Attendance } from 'src/app/attendance';

@Component({
  selector: 'app-attendance-table',
  templateUrl: './attendance-table.component.html',
  styleUrls: ['./attendance-table.component.css']
})
export class AttendanceTableComponent {
  selectedType: string = "class";
  selectedClass: string = "";
  selectedTeacher: string ="";
  attendanceDate :Date = new Date() ;
  students: any[]=[]; 
  attendance : Attendance [] =[] ;
  changeType(type:string){
    // TODO : change the class to teacher when we change the redio button
  }
  changeClass(){
    // TODO : take the data (students data based on the class) from the database based on the selected class
  }

  markAttendance(id: number , status : string ){
   // TODO : mark the attendace based on the student or teacher id and at the specified date
  }

  submitAttendance(){

  }
}
