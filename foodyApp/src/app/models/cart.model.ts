import { CartItem } from './cartIem.model';


export class Cart{
    public user: string; //owner of the cart
    public cartItems:CartItem [];
    constructor(user:string,cartItems){
        this.user=user;
        this.cartItems=cartItems;
        
    }


} 