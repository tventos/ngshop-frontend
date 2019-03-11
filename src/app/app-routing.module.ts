import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
    HomeController,
    CartController,
    CatalogController,
    CatalogViewController
} from './controllers';

const routes: Routes = [
    {
        path: '',
        component: HomeController,
    },
    {
        path: 'cart',
        component: CartController,
    },
    {
        path: 'catalog',
        component: CatalogController,
    },
    {
        path: 'catalog/:uri',
        component: CatalogViewController,
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
