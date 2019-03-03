import { Action } from '@ngrx/store';

export const LOAD_CART = '[Cart] Load';
export const LOAD_CART_SUCCESS = '[Cart] Load success';
export const ADD_CART = '[Cart] Add';

export class AddCart implements Action {
    readonly type = ADD_CART;

    constructor(public payload: any) {}
}

export class LoadCart implements Action {
    readonly type = LOAD_CART;

    constructor(public payload: any) {}
}


export type Action = AddCart
    | LoadCart;