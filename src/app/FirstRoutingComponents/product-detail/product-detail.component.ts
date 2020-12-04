import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductServiceService } from '../product-service.service';



@Component({
  templateUrl: './product-detail.component.html',
})

export class ProductDetailComponent {
  product: Product=new Product(0," ",0);
  data:any;
  public id: any;
  sub: any;
  constructor(private _Acticatedroute: ActivatedRoute,
    private _router: Router,
    private _productService: ProductServiceService) {

  }
  private ngOnInit() {
  /*   this.sub =
      this._Acticatedroute.params.subscribe
        (params => {
          this.id = params['id']; */
            this.sub=this._Acticatedroute.paramMap.subscribe(params => { 
           console.log(params);
            this.id = params.get('id'); 
            console.log("Demo id---"+this.id);
           this.product=this._productService.getProduct(this.id);
          //   this.data=this._productService.getProduct(this.id);
             console.log(this.product);
        //    this.product=products.find(p => p.productID==this.id);    
        });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onBack(): void {
    this._router.navigate(['product']);
  }
}