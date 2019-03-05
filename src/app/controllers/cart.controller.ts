import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from '../store/reducers';
import * as fromService from '../services';
import * as fromModels from '../models';
import * as cartActions from '../store/actions/cart.action';

@Component({
    selector: 'app-cart-controller',
    template: `
      <div class="container">
          <h1>
              Корзина ({{cartTotal$ | async}})
          </h1>

          <table class="table">
              <thead>
                <tr>
                    <th width="35%">
                        Имя
                    </th>
                    <th width="25%">
                        Цена
                    </th>
                    <th width="20%">
                        Количество
                    </th>
                    <th width="20%">
                        Сумма
                    </th>
                    <th width="10%">

                    </th>
                </tr>
              </thead>
              <tbody>
              <tr *ngFor="let products of cart$ | async; let i = index">
                  <td>
                      {{products.product.name}}
                  </td>
                  <td>
                      {{products.product.price}}
                  </td>
                  <td>
                      <input type="number" class="form-control" value="{{products.quantity}}" (change)="changeQuantity($event, products.product)">
                  </td>
                  <td>
                      {{products.product.price * products.quantity}}
                  </td>
                  <td>
                      <button class="btn btn-danger" (click)="removeProduct(products.product)">&times;</button>
                  </td>
              </tr>
              </tbody>
              <tfoot>
                <tr>
                    <td colspan="2">
                        
                    </td>
                    <td>
                        <b class="float-right">Итого:</b>
                    </td>
                    <td colspan="2">
                        {{cartCost$ | async}} ₽
                    </td>
                </tr>
              </tfoot>
          </table>
      </div>
  `,
})
export class CartController {
    public cart$;
    public cartCost$;
    public cartTotal$;

    constructor(
        private store: Store<fromRoot.State>,
        private cartService: fromService.CartService
    ) {
        this.cart$ = store.select(fromRoot.getCartProducts);
        this.cartCost$ = store.select(fromRoot.getCartCost);
        this.cartTotal$ = store.select(fromRoot.getCartTotal);
    }

    changeQuantity(event: any, product: any) {
        this.cartService.addToCart(product, event.target.value, 'cart');

        this.store.dispatch(new cartActions.LoadCart(this.cartService.getCart()));
    }

    removeProduct(product: fromModels.Product) {
        this.cartService.removeProduct(product);

        this.store.dispatch(new cartActions.LoadCart(this.cartService.getCart()));
    }
}