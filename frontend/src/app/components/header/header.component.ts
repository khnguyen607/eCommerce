import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  searchProduct(form: NgForm) {
    const url = this.router.createUrlTree(['/shop'], { queryParams: { q: form.value.q } }).toString();
    window.location.href = url;
  }

  cart: boolean = false;
}
