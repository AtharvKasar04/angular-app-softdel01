import { Component, inject, signal } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  productService = inject(ProductService);
  route = inject(ActivatedRoute);

  productId = Number(this.route.snapshot.paramMap.get('id'));
  product = signal(this.productService.getProductById(this.productId));

  title = this.product()?.title;
  description = this.product()?.description;
  image = this.product()?.image;
  price = this.product()?.price;
}
