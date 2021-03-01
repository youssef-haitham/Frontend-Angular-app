export class Product{
    public id:number=0;
    public name: String; //name of the product
    public description: String; //description of the product
    public image: String; //url of image
    public price: number; //price of the product
    public type: string;
    static count:number=0;
 
    constructor(name:string,description:string,image:string,price:number,type:string){
        this.id=Product.count+1;
        Product.count+=1;
        this.name=name;
        this.description=description;
        this.image=image;
        this.price=price;
        this.type=type;
        
    }
}
