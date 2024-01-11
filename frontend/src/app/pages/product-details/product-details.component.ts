import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: any;
  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      let id: any = new URLSearchParams(window.location.search).get('id')
      this.product = data.find((p: { id: number; }) => p.id == id);
    });
  }

  value = 1;
  increaseValue() {
    this.value++;
  }
  decreaseValue() {
    if (this.value > 1) {
      this.value--;
    }
  }
}