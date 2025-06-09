import { Injectable } from '@angular/core';
import { Product } from '../models/products.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {

  apiUrl = 'https://fakestoreapi.com/products'

  constructor(http: HttpClient) {
    this.http = http;
  }

  http: HttpClient;

  getAllProducts(): Observable<any> {
    console.log('getAllProducts called from product-api.service.ts');
    
    return this.http.get(this.apiUrl);
  }

  getProductById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
}
