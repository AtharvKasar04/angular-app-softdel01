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
    return this.http.get(this.apiUrl);
  }
}
