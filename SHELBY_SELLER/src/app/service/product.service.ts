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

 
  public addProduct(product: Product): Observable<any> {
    return this.http.post<Product>("http://localhost:8080/products/addNewProduct",product);
  }
}
