import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  products: Product[];
  constructor() {
    this.products = [
      new Product(1, 'Book', 400),
      new Product(2, 'Pen', 50),
      new Product(3, 'Pages', 100)
    ]
  }
  public getProducts() {
    return this.products;
  }
  public getProduct(id: number): Product {
    let pro:Product=new Product(0," ",0);
      for(let i=0;i<this.products.length;i++)
      {
         if(id==this.products[i].productID)
         {
          pro=this.products[i];
          break;
         }
      }
      console.log("in service"+pro);
      return pro;
  }
}
