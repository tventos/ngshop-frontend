import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeController, CartController } from './controllers';

const routes: Routes = [
    {
        path: '',
        component: HomeController,
    },
    {
        path: 'cart',
        component: CartController,
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
