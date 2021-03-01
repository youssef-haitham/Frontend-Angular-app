import { User } from '../models/user.model';

export class UserService{
    private users: User []=[
        new User("msamir@sumerge.com","mai","samir","123",11200,"cairo"),
        new User("yh@a","Youssef","Haitham","1",111,"cairo")
    ];
    public active: boolean=false;
    public currentuser: string="";
    public message: string="";
  
  
    getAllUsers(){
      return this.users;
    }
    register(email:string,firstname:string,lastname:string,password:string,mobile:number,address:string){
        
      this.users.push(new User(email,firstname,lastname,password,mobile,address));
    }

    deleteUserAccount(){

    }
    logOut(){
      this.currentuser="";
      this.active=false;
    }

    login(email:string,password:string){
      for(var i=0;i<this.users.length;i++){
        let u= this.users[i];
        if(u.email===email){
          if(u.password===password){
            this.active=true;
            this.currentuser=u.firstName+" "+ u.lastName;
            return true;
          }
          else{
              this.message="Wrong Password";
              return false;
          }

        }

      }
      this.message="Check your email";
      return false;


    }



}