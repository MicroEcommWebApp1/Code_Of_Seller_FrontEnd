import { FileHandle } from "./file-handke.model";

export interface Product{
    product_id: any;
    seller_id:number;
    name:String;
    email:String;
    description:String,
    price : number,
    quantity: number,
    category : String,
    subcategory1:String,
    subcategory2 : String,
    thumbnail:String,
    tags:String,
    productImages: FileHandle[],

}