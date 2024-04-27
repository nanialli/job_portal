export class User {
    
 userName: string ;
 userEmail: string;
 userRole: string;
 
 village: string;
 country: string;
 state: string;
 district: string;
 pincode: number;
 street: string;
 landmark: string;
phoneNo: number;  // changed from Long to bigint
phoneNo2: number;
constructor(userName:string, userEmail:string,userRole: string,village: string,country: string,
    state: string,district: string,pincode: number,street: string,landmark: string,phoneNo: number,phoneNo2: number
){
    this.userName =userName;
    this.country=country;
    this.district=district;
    this.landmark= landmark;
    this.phoneNo= phoneNo;
    this.phoneNo2 = phoneNo2;
    this.pincode = pincode;
    this.state = state;
    this.street =street;
    this.userEmail= userEmail;
    this.userRole = userRole;
    this.village = village;
}
}
