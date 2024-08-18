import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CartComponent } from './cart/cart.component';
import { SignupComponent } from './signup/signup.component';
import { authGuard } from './auth.guard';
import { ProductdetailsComponent } from './productdetails/productdetails.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',canActivate:[authGuard], component: HomeComponent },
  { path: 'signup', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'cart',canActivate:[authGuard], component: CartComponent },
  { path: 'productdetails/:id',canActivate:[authGuard], component: ProductdetailsComponent },
  { path: 'Signup', component: SignupComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
