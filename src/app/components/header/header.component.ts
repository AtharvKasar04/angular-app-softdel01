import { Component, inject, signal } from '@angular/core';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';
import { CartService } from '../../services/cart.service';
import { RouterLink } from '@angular/router';
import { OrderSummaryComponent } from '../../pages/cart/order-summary/order-summary.component';
import { LoginButtonComponent } from '../login-button/login-button.component';
import { SignupButtonComponent } from '../signup-button/signup-button.component';
import { UsersDashboardComponent } from '../../pages/users-dashboard/users-dashboard.component';

@Component({
    selector: 'app-header',
    imports: [PrimaryButtonComponent, RouterLink, OrderSummaryComponent, LoginButtonComponent, SignupButtonComponent, UsersDashboardComponent],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})
export class HeaderComponent {
    title = signal('Angular Component')

    showButtonClicked() {
        console.log("Clicked!");
    }

    cartService = inject(CartService);
}
