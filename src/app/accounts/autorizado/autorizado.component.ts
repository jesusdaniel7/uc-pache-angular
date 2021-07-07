import { Component, OnInit } from '@angular/core';
import { AccountsServiceService } from 'src/app/services/accounts-service.service';

@Component({
  selector: 'app-autorizado',
  templateUrl: './autorizado.component.html',
  styleUrls: ['./autorizado.component.scss']
})
export class AutorizadoComponent implements OnInit {

  constructor(private accountService: AccountsServiceService) { }

  ngOnInit(): void {
  }

  Autorizado(): boolean{
    return this.accountService.Islogeado();
  }

}
