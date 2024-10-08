import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { Observable,BehaviorSubject } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData =new BehaviorSubject(null) ;
  decodeUserData(){
    let encodedData =JSON.stringify( localStorage.getItem('userToken'));
    let decodedToken: any = jwtDecode(encodedData);
    console.log(decodedToken);
    this.userData.next( decodedToken);
  }
  constructor(private _HttpClinte: HttpClient , private _Router:Router) { 

    if (localStorage.getItem('userToken')!== null)
    {
      this.decodeUserData();
    }
  }

  logOut(){
    localStorage.removeItem('userToken');
    this.userData.next(null);
    this._Router.navigate(['/login']);
  }
  register(userData:object):Observable<any>
  {
    return this._HttpClinte.post('https://route-ecommerce.onrender.com/api/v1/auth/signup'  , userData);
  }
  login(userData:object):Observable<any>
  {
    return this._HttpClinte.post('https://route-ecommerce.onrender.com/api/v1/auth/signin'  , userData);
  }
}
