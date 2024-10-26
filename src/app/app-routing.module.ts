import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard'; 

const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'home', 
    pathMatch: 'full' 
  },
  { 
    path: 'home', 
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule), 
    canActivate: [AuthGuard] 
  },
  { 
    path: 'login', 
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule) 
  },
  { 
    path: 'register', 
    loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule) 
  },
  { 
    path: 'forgot-password', 
    loadChildren: () => import('./forgot-password/forgot-password.module').then(m => m.ForgotPasswordPageModule)
  },
  { 
    path: 'profile', 
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule), 
    canActivate: [AuthGuard] 
  },
  { 
    path: 'category-products/:id', 
    loadChildren: () => import('./category-products/category-products.module').then(m => m.CategoryProductsPageModule) 
  },
  {
    path: 'cart', 
    loadChildren: () => import('./cart/cart.module').then(m => m.CartPageModule) 
  },
  {
    path: 'shipping-details', 
    loadChildren: () => import('./shipping-details/shipping-details.module').then(m => m.ShippingDetailsPageModule)
  },
  {
    path: 'payment', 
    loadChildren: () => import('./payment/payment.module').then(m => m.PaymentPageModule)
  },
  {
    path: 'order-confirmation', 
    loadChildren: () => import('./order-confirmation/order-confirmation.module').then(m => m.OrderConfirmationPageModule)
  },
  {
    path: 'invoices-history',
    loadChildren: () => import('./invoices-history/invoices-history.module').then( m => m.InvoicesHistoryPageModule)
  }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
