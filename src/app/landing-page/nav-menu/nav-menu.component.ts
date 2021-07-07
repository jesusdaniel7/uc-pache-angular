import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountsServiceService } from 'src/app/services/accounts-service.service';
import { CartServiceService } from 'src/app/services/cart-service.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {

  constructor(public service: AccountsServiceService,
    private router: Router,
    private cartService: CartServiceService) { }

  ngOnInit(): void {
  }

  logout(){
    console.log("Deslogueado")
    this.service.logout();
    this.router.navigate(['']);
  }
}
