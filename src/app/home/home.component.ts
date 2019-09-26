import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  newProduct: Product;
  hotProduct: Product;
  featuredProduct: Product;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.newProduct = this.productService.getProducts()[0];
    this.hotProduct = this.productService.getProducts()[1];
    this.featuredProduct = this.productService.getFeaturedProduct();
  }

}
