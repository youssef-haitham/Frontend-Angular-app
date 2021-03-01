import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import * as delay from 'delay';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers:[]
})
export class SignUpComponent implements OnInit {
  @ViewChild('f') signUpForm: NgForm;
  submitted: boolean=false;

  constructor(private userService:UserService,
    private router:Router
   ) { }

  ngOnInit(): void {
  }

  signInNav(){
    this.router.navigate(["/login"]);
  }
  
  async onSubmit(){
    if(this.signUpForm.valid){
    this.userService.register(
      this.signUpForm.value.email,
      this.signUpForm.value.firstName,
      this.signUpForm.value.lastName,
      this.signUpForm.value.password,
      this.signUpForm.value.mobile,
      this.signUpForm.value.address);
    this.signUpForm.reset();
    this.submitted=true;

    console.log(this.userService.getAllUsers());
    try{
    await delay(1000);
    }
    catch(e){

    }
    this.router.navigate(["/login"]);
    
  }
  }

}
