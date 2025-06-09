import { Component, effect, inject, signal } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductApiService } from '../../services/product-api.service';
import { Product } from '../../models/products.model';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  productService = inject(ProductService);
  productApiService = inject(ProductApiService);
  route = inject(ActivatedRoute);

  productId = Number(this.route.snapshot.paramMap.get('id'));
  // product = signal(this.productService.getProductById(this.productId));
  selectedProduct = signal<Product | null>(null);

  constructor() {
    this.productApiService.getProductById(this.productId).subscribe({
      next: (product) => {
        console.log('Product fetched:', product);
        this.selectedProduct.set(product);
      },
      error: (err) => {
        console.error('Error fetching product:', err);
      }
    });
  }

  title = this.selectedProduct()?.title;
  description = this.selectedProduct()?.description;
  image = this.selectedProduct()?.image;
  price = this.selectedProduct()?.price;
}
