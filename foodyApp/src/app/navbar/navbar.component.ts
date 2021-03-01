import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  username:String="";
  

  constructor(private router:Router,private userService:UserService) { 

  }

  ngOnInit(): void {
  }

  loginStatus(){
    if(this.userService.active){
      this.username=this.userService.currentuser;


      return true;


    }
    return false;
  }
  logOut(){
    this.userService.logOut();
    this.router.navigate(["/"]);
  }


}
