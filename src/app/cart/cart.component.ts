import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  nikeCantity= 0;
  amazonPrime= 0;

  sumarNike(){
    this.nikeCantity++;
  }

  restarNike(){
    this.nikeCantity--;
  }

  sumarAmazonPrime(){
    this.amazonPrime++;
  }

  restarAmazonPrime(){
    this.amazonPrime--;
  }

}
