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
        path: 'catalog/:uri',
        component: CatalogViewController,
    },
    {
        path: 'catalog/:uri/:uri',
        component: HomeController,
    },
    {
        path: 'catalog',
        component: CatalogController,
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
