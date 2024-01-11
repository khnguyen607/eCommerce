import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    var apiUrl = '/callapi?controller=product';
    return this.http.get(apiUrl);
  }

  getCategory(): Observable<any> {
    var apiUrl = '/callapi?controller=category';
    return this.http.get(apiUrl);
  }
}
