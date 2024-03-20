import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Router } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Product } from '../model/product.model';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {
  product: Product={
    name: '',
    description: '',
    price: 0,
    quantity: 0,
    category: '',
    subcategory1: '',
    subcategory2: ''
  }

  constructor( private productservice:ProductService , private router: Router){}


  addProduct(productForm: NgForm){
    this.productservice.addProduct(this.product).subscribe(
     (response:Product)=>{
      console.log(response);
      alert('product added');
      this.router.navigate(['/sellerdashboard']);
      },
      (error:HttpErrorResponse)=>
      {
        console.log(error);
      }
    );
  }
   

}
