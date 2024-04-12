import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

 
  constructor(private http : HttpClient) { }

  getOrdersByEmail(sellerEmailID: String) {
    return this.http.get<any>(`http://localhost:8084/order/sellerorderdetails/${sellerEmailID}`).pipe(
     catchError(this.handleError)
   );
 
}

private handleError(error: any) {
  console.error('An error occurred:', error);
  return throwError(error);

  
}
}