import { Injectable, signal } from '@angular/core';
import { Product } from '../models/products.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products = signal<Product[]>([
    {
      id: 1,
      title: 'Noise Cancellation Premium Headphones',
      description: 'Immerse yourself in rich, high-fidelity audio with these wireless over-ear headphones. Equipped with 40mm dynamic drivers, Bluetooth 5.2, and hybrid active noise cancellation, they deliver crisp sound and deep bass in any environment. Enjoy up to 30 hours of playback time on a single charge, with a comfortable, foldable design perfect for travel and daily use.',
      image: 'https://plus.unsplash.com/premium_photo-1679913792906-13ccc5c84d44?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: 100.99,
      stock: 123,
    },
    {
      id: 2,
      title: 'Premium Headphones with ANC and Long Battery Life',
      description: 'Track your health in style with this sleek smartwatch featuring a vibrant AMOLED screen, heart rate monitoring, step tracking, sleep analysis, and 10-day battery life. Compatible with iOS and Android.',
      image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
      price: 130.99,
      stock: 13,
    },
    {
      id: 3,
      title: 'Lightweight Running Sneakers for Men and Women',
      description: 'Designed for comfort and performance, these sneakers feature breathable mesh uppers, responsive foam soles, and a stylish design that transitions easily from workouts to casual wear.',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D',
      price: 59.99,
      stock: 0,
    }
  ])

  getProductById(id: number): Product | undefined {
    return this.products().find(p => p.id === id);
  }

  constructor() { }
}
