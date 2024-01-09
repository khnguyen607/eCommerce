import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http: HttpClient) { }

  getProducts(params:string): Observable<any> {
    var apiUrl = '/callapi?'+params;
    return this.http.get(apiUrl);
  }
}
