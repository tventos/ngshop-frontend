import { Effect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';

import * as cartActions from '../actions/cart.action';
import * as fromService from '../../services';
import { map } from 'rxjs/internal/operators';

@Injectable()
export class CartEffects {
    constructor(
        private actions$: Actions,
        private cartService: fromService.CartService
    ) {}

    @Effect()
    loadCart$ = this.actions$.pipe(ofType(cartActions.LOAD_CART), map(action => {
        const cart = this.cartService.getCart();

        //return new cartActions.LoadCartSuccess(cart);
    }) );
}