import * as catalogAction from '../actions/catalog.action';
import { Catalog } from '../../models';

export interface State {
    catalog: Catalog[];
    category: Catalog;
    loading: boolean;
    loaded: boolean;
}

export const initialState: State = {
    catalog: [],
    category: null,
    loading: false,
    loaded: false
};

export function reducer(state = initialState, action: catalogAction.Action) {
    switch (action.type) {
        case catalogAction.LOAD_CATALOG_LIST: {
            return {
                ...state,
                loading: true
            };
        }

        case catalogAction.LOAD_CATALOG_LIST_SUCCESS: {
            return {
                ...state,
                loading: false,
                loaded: true,
                catalog: action.payload
            };
        }

        case catalogAction.LOAD_CATALOG_LIST_FAIL: {
            return {
                ...state,
                loading: false,
                loaded: false
            };
        }

        case catalogAction.LOAD_CATEGORY: {
            return {
                ...state,
                loading: true
            };
        }

        case catalogAction.LOAD_CATEGORY_SUCCESS: {
            return {
                ...state,
                loading: false,
                loaded: true,
                category: action.payload
            };
        }

        case catalogAction.LOAD_CATEGORY_FAIL: {
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

export const getCatalogList = (state: State) => state.catalog;
export const getCategory = (state: State) => state.category;