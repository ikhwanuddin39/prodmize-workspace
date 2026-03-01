import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';

export const routes: Routes = [
    {
        path: 'login',
        loadComponent: () =>
            loadRemoteModule('mfe-auth', './Login').then(m => m.LoginComponent)
    },
    {
        path: 'products',
        loadComponent: () =>
            loadRemoteModule('mfe-product', './ProductList').then(m => m.ProductListComponent)
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    }
];