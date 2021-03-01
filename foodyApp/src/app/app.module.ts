import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CartComponent } from './cart/cart.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { UserService } from './services/user.service';
import { CartService } from './services/cart.service';
import { ProductService } from './services/menuItem.service';


const appRoutes: Routes =[
{path: 'login',component: SignInComponent},
{path: 'signUp',component: SignUpComponent},
{path: '',component: HomeComponent},
{path: 'cart',component: CartComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CartComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent
  ],
  imports: [
    NgbModule,
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService,CartService,ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
