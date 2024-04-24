export class Attendance {
  userId :number ;
  date : Date ;
  status : string ;
  constructor (userId:number , date:Date,status:string ){
    this.userId= userId;
    this.date=date;
    this.status=status;
  }
}
