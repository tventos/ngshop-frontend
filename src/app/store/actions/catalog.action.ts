import { Action } from '@ngrx/store';

export const LOAD_CATALOG_LIST = '[Catalog] Load';
export const LOAD_CATALOG_LIST_SUCCESS = '[Catalog] Load success';
export const LOAD_CATALOG_LIST_FAIL = '[Catalog] Load fail';

export const LOAD_CATEGORY = '[Category] Load';
export const LOAD_CATEGORY_SUCCESS = '[Category] Load success';
export const LOAD_CATEGORY_FAIL = '[Category] Load fail';

export class LoadCatalogList implements Action {
    readonly type = LOAD_CATALOG_LIST;

    public payload: any;
}

export class LoadCatalogListSuccess implements Action {
    readonly type = LOAD_CATALOG_LIST_SUCCESS;
    constructor(public payload: any) {}
}

export class LoadCatalogListFail implements Action {
    readonly type = LOAD_CATALOG_LIST_FAIL;

    constructor(public payload: any) {}
}

export class LoadCategory implements Action {
    readonly type = LOAD_CATEGORY;

    constructor(public payload: any) {}
}

export class LoadCategorySuccess implements Action {
    readonly type = LOAD_CATEGORY_SUCCESS;

    constructor(public payload: any) {}
}

export class LoadCategoryFail implements Action {
    readonly type = LOAD_CATEGORY_FAIL;

    constructor(public payload: any) {}
}

export type Action = LoadCatalogList
    | LoadCatalogListSuccess
    | LoadCatalogListFail
    | LoadCategory
    | LoadCategorySuccess
    | LoadCategoryFail;