import * as cartAction from '../actions/cart.action';

export interface State {
    products: any;
    cartTotal: number;
    cartCost: number;
}

export const initialState: State = {
    products: [],
    cartTotal: 0,
    cartCost: 0
};

export function reducer(state = initialState, action: cartAction.Action) {
    switch (action.type) {
        case cartAction.ADD_CART: {
            return action.payload;
        }

        case cartAction.LOAD_CART: {
            return action.payload;
        }

        default:
            return state;
    }
}

export const getCartProducts = (state: State) => state.products;
export const getCartTotal = (state: State) => state.cartTotal;
export const getCartCost = (state: State) => state.cartCost;