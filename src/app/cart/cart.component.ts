import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  // nike:number = 1;
  // amazonPrime:number = 1;

  products = [
    { name: 'nike', cuantity: 1, price: 200 },
    { name: 'amazon', cuantity: 1, price: 160 },
  ];

  ordersumary:number = this.products[0].price + this.products[1].price;

  sumarNike() {
    this.products[0].cuantity++;
    this.ordersumary+=this.products[0].price;
  }

  restarNike() {
    if (this.products[0].cuantity >= 1) {
      this.products[0].cuantity--;
      this.ordersumary-=this.products[0].price;
    } else {
      this.products[0].cuantity = 0;
    }
  }

  sumarAmazonPrime() {
    this.products[1].cuantity++;
    this.ordersumary+=this.products[1].price;
  }

  restarAmazonPrime() {
    if (this.products[1].cuantity >= 1) {
      this.products[1].cuantity--;
      this.ordersumary-=this.products[1].price;
    } else {
      this.products[1].cuantity = 0;
    }
  }
}
