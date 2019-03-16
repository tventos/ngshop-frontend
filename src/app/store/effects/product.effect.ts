import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';

import * as productActions from '../actions/products.action';
import * as fromServices from '../../services';

@Injectable()
export class ProductEffects {
    constructor(
        private actions$: Actions,
        private productService: fromServices.ProductService
    ) {}

    @Effect()
    loadProducts$ = this.actions$.pipe(ofType(productActions.LOAD_PRODUCTS),
        switchMap((action) => {
            return this.productService
                .getProducts(action)
                .pipe(
                    map(products => new productActions.LoadProductsSuccess(products)),
                    catchError(error => of(new productActions.LoadProductsFail(error)))
                );
        })
    );
}