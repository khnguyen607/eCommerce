import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { ProductsService } from '../../services/products.service';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  products: any;

  constructor(
    private productService: ProductsService,
    private renderer: Renderer2,
    private el: ElementRef
  ) { }

  ngOnInit(): void {
    this.productService.getProducts('controller=product').subscribe(data => {
      this.products = data;
    });
  }

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

  sortProducts(sortOption: any) {
    const selectedValue = sortOption.target.value;
    switch (selectedValue) {
      case 'menu_order':
        this.products.sort((a: any, b: any) => (a.id - b.id));
        break;
      case 'date':
        this.products.sort((a: any, b: any) => (b.id - a.id));
        break;
      case 'price':
        this.products.sort((a: any, b: any) => a.price - b.price);
        break;
      case 'price-desc':
        this.products.sort((a: any, b: any) => b.price - a.price);
        break;
    }
  }
}