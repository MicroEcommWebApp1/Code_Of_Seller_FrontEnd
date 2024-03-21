import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product.model';

const BASIC_URL=['http://localhost:8080']

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 

  constructor(private http : HttpClient) { }

 
  public addProduct(product: FormData): Observable<any> {
    return this.http.post<Product>("http://localhost:8080/products/addNewProduct",product);
  }

  public getAllProducts(){
    return this.http.get<Product[]>("http://localhost:8080/products/getAllProducts");
  }

  public deleteProduct(product_id:number)
  {
    return this.http.delete("http://localhost:8080/products/deleteProduct/"+product_id);
  }
}
