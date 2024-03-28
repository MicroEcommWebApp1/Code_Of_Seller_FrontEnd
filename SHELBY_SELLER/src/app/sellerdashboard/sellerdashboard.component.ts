import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';

import { HttpErrorResponse } from '@angular/common/http';
import { Product } from '../model/product.model';
import { MatDialog } from '@angular/material/dialog';
import { ShowProductImagesComponent } from '../show-product-images/show-product-images.component';
import { ImageProcessingService } from '../service/image-processing.service';
import { map } from 'rxjs';
import { ShowProductThumbnailComponent } from '../show-product-thumbnail/show-product-thumbnail.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sellerdashboard',
  templateUrl: './sellerdashboard.component.html',
  styleUrls: ['./sellerdashboard.component.css']
})
export class SellerdashboardComponent {
  productDetails : Product[]=[];
  displayedColumns: string[] = ['ID', 'NAME','THUMBNAIL','IMAGES', 'DESC', 'PRICE','QUANTITY','CATEGORY','SUBCATEGORY1','SUBCATEGORY2','EDIT','DELETE'];

  ngOnInit():void{
    this.getAllProducts();
  }


  constructor(private productservice:ProductService, 
    public imagediaolog:MatDialog ,
    private imageProcessingService:ImageProcessingService,
    private router:Router){}

  public getAllProducts(){
    this.productservice.getAllProducts()
    .pipe(
      map((products: Product[]) => {
        return products.map((product: Product) => {
          // Transform the product using both functions
          const productWithImages = this.imageProcessingService.createImages(product);
          //const productWithThumbnail = this.imageProcessingService.createImage(productWithImages);
          return productWithImages;
        });
      })
    )
    .subscribe(
      (response:Product[])=>
      {
        console.log(response);
        this.productDetails=response;
        
      },
      (error:HttpErrorResponse)=>{
        console.error('Error Adding Product', error);
        if (error.status === 400) {
          console.error('Details are not entered!!');
          alert('Please make sure that you Enter all the Details');
        } 
        else{
          alert('Error Adding product: ' + error.message);
        }
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

  editProductDetails(product_id:any){
    this.router.navigate(['/addproduct',{product_id:product_id}]);
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
