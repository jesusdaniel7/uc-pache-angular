import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Accounts, Login, User } from '../models/accounts';

@Injectable({
  providedIn: 'root'
})
export class AccountsServiceService {
  private apiURL = environment.apiURL + 'users';

  //users credentials
  private readonly email = 'email';
  private readonly id = 0;
  private readonly name = 'name';


  constructor(private http: HttpClient) { }



    login(credenciales: Login): Observable<Login>{
      return this.http.post<Login>(`${this.apiURL}/login`, credenciales);
    }


    //Metodos auxiliares
    public Islogeado(): boolean{
      const name = localStorage.getItem(this.name);
      const id = localStorage.getItem(this.id.toString());
  
     if(name === null || id === null ){return false;}
      
      return true;
    }

    logout(){
      localStorage.removeItem(this.email);
      localStorage.removeItem(this.name);
      localStorage.removeItem(this.id.toString());
    }

    guardarUsuario(user: User){
      localStorage.setItem(this.email, user.email);
      localStorage.setItem(this.name, user.name);
      localStorage.setItem(this.id.toString(), user.id.toString());

    }
}
