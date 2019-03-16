import { Action } from '@ngrx/store';

export const LOAD_PRODUCTS = '[Products] Load';
export const LOAD_PRODUCTS_SUCCESS = '[Products] Load success';
export const LOAD_PRODUCTS_FAIL = '[Products] Load fail';

export class LoadProducts implements Action {
    readonly type = LOAD_PRODUCTS;

    constructor(public payload: any = '') {}
}

export class LoadProductsSuccess implements Action {
    readonly type = LOAD_PRODUCTS_SUCCESS;

    constructor(public payload: any) {}
}

export class LoadProductsFail implements Action {
    readonly type = LOAD_PRODUCTS_FAIL;

    constructor(public payload: any) {}
}

export type Action = LoadProducts
    | LoadProductsSuccess
    | LoadProductsFail;