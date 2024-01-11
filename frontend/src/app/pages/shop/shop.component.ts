import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { ProductsService } from '../../services/products.service';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  products: any;
  category: any;
  

  constructor(
    private productService: ProductsService,
    private renderer: Renderer2,
    private el: ElementRef
  ) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });

    this.productService.getCategory().subscribe(data => {
      this.category = data;
    });
  }

  activeIndex: any;
  find_product(category: string, index: number) {
    switch (category) {
      case 'alls':
        this.renderer.addClass(this.el.nativeElement.querySelector('.shop-product-filter .alls'), 'active');
        this.renderer.removeClass(this.el.nativeElement.querySelector('.shop-product-filter .category.active'), 'active');
        this.products = this.productService.getProducts();
        break;
      default:
        this.renderer.removeClass(this.el.nativeElement.querySelector('.shop-product-filter .alls'), 'active');
        this.activeIndex = index;
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