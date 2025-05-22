import { Component, inject, input } from '@angular/core';
import { Product } from '../../../models/products.model';
import { PrimaryButtonComponent } from '../../../components/primary-button/primary-button.component';
import { CartService } from '../../../services/cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-card',
  imports: [PrimaryButtonComponent, RouterLink],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  product = input.required<Product>()

  cartService = inject(CartService);
}
