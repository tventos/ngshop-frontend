import * as productAction from '../actions/products.action';
import { Product } from '../../models';

export interface State {
    products: Product[];
    loading: boolean;
    loaded: boolean;
}

export const initialState: State = {
    products: [],
    loading: false,
    loaded: false
};

export function reducer(state = initialState, action: productAction.Action) {
    switch (action.type) {
        case productAction.LOAD_PRODUCTS: {
            return {
                ...state,
                loading: true
            };
        }

        case productAction.LOAD_PRODUCTS_SUCCESS: {
            return {
                ...state,
                loading: false,
                loaded: true,
                products: action.payload
            };
        }

        case productAction.LOAD_PRODUCTS_FAIL: {
            return {
                ...state,
                loading: false,
                loaded: false
            };
        }

        default:
            return state;
    }
}

export const getProducts = (state: State) => state.products;