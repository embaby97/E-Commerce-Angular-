import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

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
