import { Product } from './product';

export class CartItem {

    id:number;
    name:string;
    imageUrl:string;
    unitPrice:number;
    quantity:number;

    constructor(private product:Product){
        this.id=product.id;
        this.name=product.name;
        this.unitPrice=product.unitPrice;
        this.imageUrl=product.imageUrl;
        this.quantity=1;
    }
}
