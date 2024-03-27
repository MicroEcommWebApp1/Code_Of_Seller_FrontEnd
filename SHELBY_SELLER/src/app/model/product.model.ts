import { FileHandle } from "./file-handke.model";

export interface Product{
  product_id: any;
    name:String;
    description:String,
    price : number,
    quantity: number,
    category : String,
    subcategory1:String,
    subcategory2 : String,
    productThumbnail:FileHandle[],
   productImages: FileHandle[],

}