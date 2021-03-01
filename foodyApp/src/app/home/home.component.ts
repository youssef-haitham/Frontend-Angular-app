import { Component, OnInit } from '@angular/core';
import { Product } from '../models/menuItem.model';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/menuItem.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productTypes:string[];
  products:Product[];
  signed:boolean;
  constructor(private productService:ProductService, private cartService: CartService,private userService:UserService) { }

  ngOnInit(): void {
    this.productTypes=this.productService.productTypes;
    this.products=this.productService.products;
    this.signed=this.userService.active;


  }
  addtoCart(pro:Product){
    this.cartService.addToCart(pro);
  }





}
