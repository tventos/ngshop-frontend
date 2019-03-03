import { ActionReducerMap} from '@ngrx/store';

import * as fromProducts from './products.reducer';
import * as fromCart from './cart.reducer';

export interface State {
    products: fromProducts.State;
    cart: fromCart.State;
}

export const reducers: ActionReducerMap<State> = {
    products: fromProducts.reducer,
    cart: fromCart.reducer
};

export * from '../selectors';