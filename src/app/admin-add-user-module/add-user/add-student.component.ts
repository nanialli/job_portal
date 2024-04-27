import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AddUserServiceService } from 'src/app/add-user-service.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})

export class AddStudentComponent {
 constructor(private addUserService :AddUserServiceService, private http :HttpClient ){}
 
 user = new User('','','','','','','',0,'','',0,0);
onSubmit() {
 
  // this.addUserService.adduser(this.user).subscribe(
  //   data=> {console.log(data)},
  //   error=> {console.log(error)}
  // )

  console.log(this.user) ;
  
}
}
