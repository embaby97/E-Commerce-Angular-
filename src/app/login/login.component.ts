import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private _authService: AuthService , private _Router : Router){
    if (localStorage.getItem('userToken') !== null)
    {
      _Router.navigate(['/home']);
    }
  }
  isLoading:boolean = false;
  apiError:string='';
loginform:FormGroup = new FormGroup({

      email: new FormControl(null, [Validators.required , Validators.email]),
      password: new FormControl(null, [Validators.required ,Validators.pattern(/^[A-Z][a-z0-9]{5,10}$/) ]),
      
});
handelLogin(loginform :FormGroup){
  this.isLoading=true;
  if (loginform.valid){
    this._authService.login(loginform.value).subscribe({
        next:(response)=>{console.log(response)
        if (response.message === 'success')
        {
          //navigate to login
          localStorage.setItem('userToken' , response.token);
          this._authService.decodeUserData();
          this.isLoading=false;
          this._Router .navigate(['/home'])

        }
        
        },
        error:(err)=>{
          this.isLoading=false;
          let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMzQ1Njc4OTAiLCJuYW1lIjoiYWxhYSBlbWJhYnkiLCJyb2xlIjoiVXNlciIsImlhdCI6MTUxNjIzOTAyMiwiZXhwIjoiMTUyNjIzOTAyMiJ9.0lzEVbbW3tkayYTzN9-bPI_r4X6-lk_kW5payY1Zkwg';
          localStorage.setItem('userToken' , token);
          this._authService.decodeUserData(); 
          //this.apiError=err.error.errors.msg;
          this._Router.navigate(['/home'])//must be removed 
          
          }
        
        
        });
  }
  
}


}
