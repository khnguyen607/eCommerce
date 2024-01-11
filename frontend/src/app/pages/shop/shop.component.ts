import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  products: any;
  category: any;
  seachComponent: boolean = false;
  keyword: string = '';

  constructor(
    private productService: ProductsService,
    private cartService: CartService,
    private renderer: Renderer2,
    private el: ElementRef
  ) { }

  ngOnInit(): void {
    this.productService.getCategory().subscribe(data => {
      this.category = data;
    });

    var seach: string = new URLSearchParams(window.location.search).get('q') || '';
    if (seach) {
      this.keyword = seach;
      this.seachComponent = true
      this.productService.searchProducts(seach).subscribe(data => {
        this.products = data;
        this.products_all = data;
      });

    } else {
      this.productService.getProducts().subscribe(data => {
        this.products = data;
        this.products_all = data;
      })
    }
  }

  activeIndex: any;
  activeAll: boolean = true;
  products_all: any;
  find_product(category: string, index: number = 0, category_id: number = 0) {
    this.el.nativeElement.querySelectorAll('.shop-product-filter button').forEach((item: any) => {
      this.renderer.removeClass(item, 'active');
    });
    switch (category) {
      case 'alls':
        this.activeAll = true
        this.products = this.products_all;
        break;
      case 'fill':
        this.activeAll = false
        this.activeIndex = index;
        this.products = this.products_all.filter((item: any) => item.category_id == category_id);
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

  addToCart(product:any) {
    // console.log(product);
    
    this.cartService.addToCart(product);
  }
}