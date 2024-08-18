import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
    constructor(private _ActivatedRoute : ActivatedRoute, private _ProductsService : ProductsService){
      
    }
    productDetails : any;
    productId :any;

    customOptions: OwlOptions = {
      loop: true,
      mouseDrag: true,
      touchDrag: false,
      pullDrag: false,
      dots: false,
      navSpeed: 800,
      navText: ['<', '>'],
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 2
        },
        740: {
          items: 3
        },
        940: {
          items: 4
        }
      },
      nav: true
    }
    ngOnInit(): void {
      this._ActivatedRoute.paramMap.subscribe((params)=>{
        this.productId = params.get('id')
      });
      this._ProductsService.getProductDetails(this.productId).subscribe({
        next:(response)=>{this.productDetails = response

        }

      });

    }
}
