import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../shared/product';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.scss']
})
export class ProductdetailComponent implements OnInit {

  product: Product;
  
  constructor(private productService: ProductService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = this.productService.getProduct(params.get('id'));
    })
  }

  goBack() {
    this.location.back();
  }

}
