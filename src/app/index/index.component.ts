import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Products, productsInterface } from '../models/products';
import { CartServiceService } from '../services/cart-service.service';
import { ProductsServiceService } from '../services/products-service.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  constructor(
    private router: Router,
    private productsService: ProductsServiceService,
    private cartService: CartServiceService
  ) {}

  products: Products[];

  ngOnInit(): void {
    this.GetData();
  }

  GetData() {
    this.productsService
      .getAll()
      .subscribe((response: HttpResponse<productsInterface[]>) => {
        this.products = response.body;
        console.log(response.body);
      });
  }

  agregarCarrito(productId: string){
    this.cartService.addCartProduct(productId).subscribe(() => {
      this.router.navigate(['carrito']);
    }, error => alert("Ya has agregado este producto!"));
  }
}
