import { Cart } from '../models/cart.model';
import { CartItem } from '../models/cartIem.model';
import { Product } from '../models/menuItem.model';

export class CartService{
    public cart:Cart;

    addToCart(product:Product){
        
        //index search of product doesnt exist else change amount
        for(var i=0;i<this.cart.cartItems.length;i++){
            if(product.id==this.cart.cartItems[i].product.id){
        this.changeAmount(i,this.cart.cartItems[i].quantity+1);
        return;}
        }
        this.cart.cartItems.push(new CartItem(product,1));
        
    }
    changeAmount(id:number,amount:number)
    {
        this.cart.cartItems[id].quantity=amount;


    }
    emptyCart(){
        this.cart.cartItems=[];
    }

    removeFromCart(id:number){
        let newProducts:CartItem[]=[];
       
        for(var i=0;i<this.cart.cartItems.length;i++){
            if(i != id){
               newProducts.push(this.cart.cartItems[i]);
            }
        }
        this.cart.cartItems=newProducts;

    }




    


}