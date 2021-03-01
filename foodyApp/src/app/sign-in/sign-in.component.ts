import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Cart } from '../models/cart.model';
import { CartService } from '../services/cart.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  @ViewChild('f') signInForm:NgForm;
  submitted: boolean=false;
  wrongUser:boolean=false;
  wrongPass:boolean=false;
  message:string="";


  constructor(private router:Router,private userService:UserService, private cartService:CartService) { }


  ngOnInit(): void {
  }

  signUpNav(){
    this.router.navigate(["/signUp"]);
  }

  onSubmit(){
    let res=this.userService.login(this.signInForm.value.email,this.signInForm.value.password);
    if(res){
      this.cartService.cart=new Cart(this.userService.currentuser,[]);
      this.router.navigate(["/"]);
    }
    else{
      this.wrongUser=true;
      this.message=this.userService.message;
      



    }

  }
}
