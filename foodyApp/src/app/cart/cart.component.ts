import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../models/cart.model';
import { CartService } from '../services/cart.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public cart:Cart;
  checkedOut=false;
  emptyCheckOut=false;
  subtotal:number=0;
  vat:number=0;
  shipping:number=5;
  total:number=0;

  constructor(private cartService:CartService, private router:Router, private userService:UserService) {


   }

  ngOnInit(): void {
    if(!this.userService.active){
      this.router.navigate(["/login"]);
    }
   this.cart=this.cartService.cart;
   this.calculate();

  }

  calculate(){
    let sub=0;
    if(this.cart.cartItems.length==0){
      this.subtotal=0;
    this.vat=0;
    this.total=0;
    this.shipping=0;


    }
    else{
    for(var i=0;i<this.cart.cartItems.length;i++){
      sub+=this.cart.cartItems[i].product.price* this.cart.cartItems[i].quantity;
    }
    this.subtotal=sub;
    this.vat=(this.subtotal*0.14);
    this.total=this.subtotal+this.vat +this.shipping;

  }
}

  setAmount(event:any, id:number){
    this.cartService.changeAmount(id,event.srcElement.value);
    this.cart=this.cartService.cart;
    this.calculate();


  }

  removeProduct(id:number){
    
    this.cartService.removeFromCart(id);
    console.log(this.cartService.cart);
    this.cart=this.cartService.cart;
    console.log(this.cart);
    this.calculate();

  }

  checkOut(){
    if(this.cart.cartItems.length==0){
      this.checkedOut=false;
      this.emptyCheckOut=true;
    }
    else{
    this.cartService.emptyCart();
    this.cart=this.cartService.cart;
    this.calculate();
    this.emptyCheckOut=false;
    this.checkedOut=true;
  }

  }


}
