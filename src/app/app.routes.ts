import { Routes } from '@angular/router';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { CartComponent } from './pages/cart/cart.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { UsersDashboardComponent } from './pages/users-dashboard/users-dashboard.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';

export const routes: Routes = [{
    path: '', 
    pathMatch: 'full',
    component: ProductsListComponent
},
{
    path: 'cart',
    component: CartComponent
},
{
    path: 'signup',
    component: SignupPageComponent
},
{
    path: 'login',
    component: LoginPageComponent
},
{
    path: 'users-dashboard',
    component: UsersDashboardComponent
},
{
    path: 'product/:id',
    component: ProductDetailsComponent
}];
