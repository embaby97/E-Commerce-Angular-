import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { CategoriesComponent } from './categories/categories.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import{HttpClientModule } from '@angular/common/http';
import { ProductdetailsComponent } from './productdetails/productdetails.component'
import {BrowserAnimationsModule}from '@angular/platform-browser/animations'
import {CarouselModule} from 'ngx-owl-carousel-o';
import { MainsliderComponent } from './mainslider/mainslider.component'
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CartComponent,
    LoginComponent,
    CategoriesComponent,
    FooterComponent,
    NavbarComponent,
    RegisterComponent,
    NotfoundComponent,
    HomeComponent,
    SignupComponent,
    ProductdetailsComponent,
    MainsliderComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
