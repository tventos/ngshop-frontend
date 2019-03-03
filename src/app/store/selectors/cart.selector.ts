import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCart from '../reducers/cart.reducer';

export const getCartState = createFeatureSelector<fromCart.State>('cart');
export const getCartProducts = createSelector(
    getCartState,
    fromCart.getCartProducts,
);

export const getCartCost = createSelector(
    getCartState,
    fromCart.getCartCost,
);

export const getCartTotal = createSelector(
    getCartState,
    fromCart.getCartTotal,
);