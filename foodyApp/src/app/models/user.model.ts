export class User{
    id:number;
    email: String;
    firstName: String;
    lastName: String;
    password: String;
    phone:Number;
    address:String;
    //cart?
    constructor(email:String,firstName:string,lastName:string,password:string,phone:number,address:string){
        
        this.email=email;
        this.firstName=firstName;
        this.lastName=lastName;
        this.password=password;
        this.phone=phone;
        this.address=address;

    }
}