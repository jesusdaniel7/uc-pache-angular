import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Products, productsInterface } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {

  constructor(private http: HttpClient) { }
  private apiURL = environment.apiURL + 'products';

  
  public getAll(): Observable<any>{
    return this.http.get<productsInterface[]>(this.apiURL, {observe: 'response'});
  }
}
