import { Injectable } from '@angular/core';
import { Product } from '../shared/product';
import { PRODUCTS } from '../shared/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Product[] {
    return PRODUCTS;
  }

  getFeaturedProduct(): Product {
    return PRODUCTS.filter((product) => product.featured)[0];
  }

  getProduct(id: string): Product {
    return PRODUCTS.filter(product=> product.id === id)[0];
  }
}
