import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { GetProductsService } from 'src/app/services/get-products.service';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  products: any;

  constructor(
    private productService: GetProductsService,
    private renderer: Renderer2,
    private el: ElementRef
  ) { }

  find_product(fill_type: any): void {
    var Items = this.el.nativeElement.querySelectorAll('.grid-item');
    switch (fill_type) {
      case 'hide_all':
        Items.forEach((Item: any) => {
          this.renderer.setStyle(Item, 'display', 'none');
        });
        break;
      default:
        Items.forEach((Item: any) => {
          this.renderer.setStyle(Item, 'display', 'block');
        });
        break;
    }


  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }
}