import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _httpClinte : HttpClient) { 


  }
  getProducts():Observable<any>{
    return this._httpClinte.get('https://fakestoreapi.com/products/');
  } 

}
