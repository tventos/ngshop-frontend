import { ActionReducerMap} from '@ngrx/store';

import * as fromProducts from './products.reducer';
import * as fromCart from './cart.reducer';
import * as fromCatalog from './catalog.reducer';

export interface State {
    products: fromProducts.State;
    cart: fromCart.State;
    catalog: fromCatalog.State;
}

export const reducers: ActionReducerMap<State> = {
    products: fromProducts.reducer,
    cart: fromCart.reducer,
    catalog: fromCatalog.reducer
};

export * from '../selectors';