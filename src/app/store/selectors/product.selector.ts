import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromProducts from '../reducers/products.reducer';

export const getProductsState = createFeatureSelector<fromProducts.State>('products');
export const getProducts = createSelector(
    getProductsState,
    fromProducts.getProducts,
);