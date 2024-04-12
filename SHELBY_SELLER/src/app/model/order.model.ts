export interface order{
    orderId:number;
    product_id:number;
    paymentId:number;
    seller_id:number;
    sellerEmailID:String;
    buyerName:String;
    email:String;
    phoneNo:number;
    productName:String;
    description:String,
    price : number,
    quantity: number,
    category : String,
    subcategory1:String,
    subcategory2 : String,
    thumbnail:String,
    totalAmount:number;
    totalproductPrice:number;
    status:String;
}