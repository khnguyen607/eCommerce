import { Component, OnInit } from '@angular/core';
import { GetProductsService } from 'src/app/services/get-products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: any;
  constructor(private productService: GetProductsService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      let id: any = new URLSearchParams(window.location.search).get('id')
      this.product = data.find((p: { id: number; }) => p.id == id);
    });

  }
}