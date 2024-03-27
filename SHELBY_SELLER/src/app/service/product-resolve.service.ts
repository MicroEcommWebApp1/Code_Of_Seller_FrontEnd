import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, map, of, switchMap } from 'rxjs';
import { ProductService } from './product.service';
import { ImageProcessingService } from './image-processing.service';


@Injectable({
  providedIn: 'root'
})
export class ProductResolveService implements Resolve<Product>{

  constructor(private productservice:ProductService, private imageProcessingService:ImageProcessingService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<Product> {
    const id=route.paramMap.get("product_id");
    if(id)
    {
      return this.productservice.getProductDetailsById(id)
      .pipe(
        map((product: Product) => {
          // Transform the product using both functions
          const productWithImages = this.imageProcessingService.createImages(product);
          const productWithThumbnail = this.imageProcessingService.createImage(productWithImages);
          return productWithThumbnail;
        })
      );
    }
    else{
      return of(this.getProductDetails());
    }
  }

  getProductDetails(){
    return {
     product_id:null,
      name: '',
    description: '',
    price: 0,
    quantity: 0,
    category: '',
    subcategory1: '',
    subcategory2: '',
    productImages: [],
    productThumbnail: []
    };
  }
}
