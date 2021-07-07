import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cart, CartDTOInterface, CartInterface } from '../models/cart';
import { CartServiceService } from '../services/cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  constructor(private cartService: CartServiceService, private router: Router) {}

  cartDTO: CartDTOInterface;
  products: CartInterface[];


  userName = localStorage.getItem("name");

  ngOnInit(): void {
    this.getCart();
  }
  // START Consumiento servicio
  getCart() {
    this.cartService
      .getCart()
      .subscribe((response: HttpResponse<CartDTOInterface>) => {
        this.cartDTO = response.body;
        this.products = this.cartDTO.carts;
        console.log(this.products);
      });
  }

  deleteCartProduct(productId: string){
    this.cartService.deleteCartProduct(productId).subscribe(() => {
      alert("Se ha eliminado del carrito!");
      window.location.reload();
    });
  }
  //END Consumiento servicio
}
