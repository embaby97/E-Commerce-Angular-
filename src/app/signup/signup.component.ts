import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private _authService: AuthService , private _Router : Router){

  }
  isLoading:boolean = false;
  apiError:string='';
registerform:FormGroup = new FormGroup({

      name: new FormControl(null, [Validators.required , Validators.minLength(3), Validators.maxLength(10)]),
      email: new FormControl(null, [Validators.required , Validators.email]),
      password: new FormControl(null, [Validators.required ,Validators.pattern(/^[A-Z][a-z0-9]{5,10}$/) ]),
      rePassword: new FormControl(null,[Validators.required ,Validators.pattern(/^[A-Z][a-z0-9]{5,10}$/) ]),
      phone: new FormControl(null,[Validators.required, Validators.pattern(/^01[125][0-9]{8}$/)]),

});
handelRegister(registerform :FormGroup){
  this.isLoading=true;
  if (registerform.valid){
    this._authService.login(registerform.value).subscribe({
        next:(response)=>{console.log(response)
        if (response.message === 'success')
        {
          //navigate to login
          this.isLoading=false;
          this._Router .navigate(['/login'])

        }
        
        },
        error:(err)=>{
          this.isLoading=false;
          this.apiError=err.error.errors.msg;
          this._Router .navigate(['/login'])//must be removed 
          
          console.log(err)}
        
        
        });
  }
  
}


}
