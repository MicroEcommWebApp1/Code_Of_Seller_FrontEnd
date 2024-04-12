import { Component } from '@angular/core';
import { Register } from '../model/register.model';
import { order } from '../model/order.model';
import { OrderService } from '../service/order.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})
export class OrderlistComponent {

  registerDto!: Register;
  orderDetails : order[]=[];
  displayedColumns: string[] = ['ORDERID', 'PAYMENTID','BUYER_NAME','BUYER_MAIL','ProductID','P_NAME','PRICE','QTY','TOTAL_AMT','TOTAL_P_PRICE','STATUS'];
  

  ngOnInit():void{
   
    this.registerDto = JSON.parse(localStorage.getItem('registerDto') || '{}');
    console.log(this.registerDto.emailID);
    this.registerDto.emailID=this.registerDto.emailID;
   this.fetchOrders();
  // this.fetchProducts();
  }


  constructor(private orderservice:OrderService, 
    public imagediaolog:MatDialog ,

    private router:Router){}

  
    fetchOrders() {
      this.orderservice.getOrdersByEmail(this.registerDto.emailID).subscribe(
        (cartItems:order[]) => {
          this.orderDetails =cartItems;
          console.log(cartItems);
        },
        error => {
          console.error('Error fetching cart items:', error);
        }
      );
    }
  

}
