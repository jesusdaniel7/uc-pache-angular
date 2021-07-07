import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Cart, CartCreationInterface } from '../models/cart';
import { Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  // private userId: number = parseInt(localStorage.getItem("0"));

  constructor(private http: HttpClient) { }
  private apiURL = environment.apiURL + 'Carts';
 
  
  getCart(): Observable<any>{
    let userId : number = parseInt(localStorage.getItem("0"));
    return this.http.get<Cart>(`${this.apiURL}/${userId}`, {observe: 'response'});
  }
  cart: CartCreationInterface;
  addCartProduct(productId: string){
    let userId : number = parseInt(localStorage.getItem("0"));
    this.cart = {
      productId: parseInt(productId),
      productQuantity:  1,
      userId: userId
    };

    return this.http.post(`${this.apiURL}/agregarcarrito`, this.cart);
  }

  deleteCartProduct(productId: string ){
    let userId : number = parseInt(localStorage.getItem("0"));
    return this.http.delete(`${this.apiURL}/${userId}/${productId}`)
  }

}
