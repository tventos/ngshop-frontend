import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../store/reducers';
import * as cartActions from '../../store/actions/cart.action';
import * as fromService from '../../services';

@Component({
    selector: 'app-minicart',
    template: `
        <a routerLink="/cart" class="btn btn-primary" title="{{cartCost$ | async}}">
            Корзина <span class="badge badge-light">{{cartTotal$ | async}}</span>
        </a>
    `
})
export class Minicart {
    public cart$;
    public cartCost$;
    public cartTotal$;

    constructor(
        private store: Store<fromRoot.State>,
        private cartService: fromService.CartService
    ) {
        if (cartService.getCart()) {
            this.store.dispatch(new cartActions.LoadCart(cartService.getCart()));
        }

        this.cart$ = store.select(fromRoot.getCartProducts);
        this.cartCost$ = store.select(fromRoot.getCartCost);
        this.cartTotal$ = store.select(fromRoot.getCartTotal);
    }
}