import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Login, User } from 'src/app/models/accounts';
import { AccountsServiceService } from 'src/app/services/accounts-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: AccountsServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  evento: string = "Iniciar";
  
  
  login(login: Login){
    this.loginService.login(login).subscribe((user: User) => {
      this.loginService.guardarUsuario(user);
      this.router.navigate(['']);
    }, error => alert("Sus credenciales no son correctas"))
  }
}
