import { Component, inject, signal } from '@angular/core';
import { Product } from '../../models/products.model';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductService } from '../../services/product.service';
import { ProductApiService } from '../../services/product-api.service';

@Component({
    selector: 'app-products-list',
    imports: [ProductCardComponent],
    templateUrl: './products-list.component.html',
    styleUrl: './products-list.component.css'
})
export class ProductsListComponent {
    products = signal<Product[]>([
        {
            id: 1,
            title: 'Noise-Cancelling Wireless Over-Ear Headphones',
            description: 'Experience crystal-clear sound with powerful bass and active noise cancellation. With Bluetooth 5.2, a 40-hour battery, and plush ear cushions, these headphones are perfect for travel, work, or immersive music sessions.',
            image: 'https://plus.unsplash.com/premium_photo-1679913792906-13ccc5c84d44?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            price: 100.99,
            stock: 123,
        },
        {
            id: 2,
            title: 'Smart Fitness Watch with AMOLED Display',
            description: 'Track your health in style with this sleek smartwatch featuring a vibrant AMOLED screen, heart rate monitoring, step tracking, sleep analysis, and 10-day battery life. Compatible with iOS and Android.',
            image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
            price: 130.99,
            stock: 13,
        },
        {
            id: 3,
            title: ' Lightweight Running Sneakers for Men and Women',
            description: 'Designed for comfort and performance, these sneakers feature breathable mesh uppers, responsive foam soles, and a stylish design that transitions easily from workouts to casual wear.',
            image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D',
            price: 59.99,
            stock: 0,
        }
    ])

    productsFromAPI = signal<Product[]>([])

    productApiService = inject(ProductApiService)

    productService = inject(ProductService);

    getProductsFromApi(): void {
        console.log('getProductsFromApi called!');

        this.productApiService.getAllProducts().subscribe({
            next: (data) => {
                this.productsFromAPI.set(data);
                console.log(`Products received from the API: ${JSON.stringify(this.productsFromAPI())}`);
            },
            error: (error) => console.error(`Error fetching products: ${error}`)
        });
    }
}
