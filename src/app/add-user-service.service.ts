import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/user';
@Injectable({
  providedIn: 'root'
})
export class AddUserServiceService {


 
  private apiUrl = 'http://13.235.91.54:8080/register/signin'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  adduser(user:User){
    return this.http.post<any>(this.apiUrl,user);
  }
  
}
