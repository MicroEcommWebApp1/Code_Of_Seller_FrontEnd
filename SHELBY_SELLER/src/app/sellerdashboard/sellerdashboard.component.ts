import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';

import { HttpErrorResponse } from '@angular/common/http';
import { Product } from '../model/product.model';
import { MatDialog } from '@angular/material/dialog';
import { ShowProductImagesComponent } from '../show-product-images/show-product-images.component';
import { ImageProcessingService } from '../service/image-processing.service';
import { map } from 'rxjs';


@Component({
  selector: 'app-sellerdashboard',
  templateUrl: './sellerdashboard.component.html',
  styleUrls: ['./sellerdashboard.component.css']
})
export class SellerdashboardComponent {
  productDetails : Product[]=[];
  displayedColumns: string[] = ['ID', 'PRODUCT_NAME','IMAGE', 'DESCRIPTION', 'PRICE','QUANTITY','CATEGORY','SUBCATEGORY1','SUBCATEGORY2','EDIT','DELETE'];

  ngOnInit():void{
    this.getAllProducts();
  }


  constructor(private productservice:ProductService, public imagediaolog:MatDialog ,private imageProcessingService:ImageProcessingService){}

  public getAllProducts(){
    this.productservice.getAllProducts()
    .pipe(
      map((x:Product[],i)=>x.map((product:Product)=>this.imageProcessingService.createImages(product)))
    )
    .subscribe(
      (response:Product[])=>
      {
        console.log(response);
        this.productDetails=response;
        
      },
      (error:HttpErrorResponse)=>{
        console.log(error);
      }
    );
  }
  
  deleteProduct(product_id:number)
  {
    this.productservice.deleteProduct(product_id).subscribe(
      (response)=>
      {
        console.log(response);
        alert("PRODUCT DELETED!!");
        this.getAllProducts();
      },
      (error)=>{
        console.log(error);
      }
    );
  }

  selectImages(product:Product){
    console.log(product);
    this.imagediaolog.open(ShowProductImagesComponent,{
      data:{
        images:product.productImages
      },
      height:'500px',width:'600px'});
  }


}
