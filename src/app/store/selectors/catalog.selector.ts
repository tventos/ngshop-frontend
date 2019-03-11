import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCatalog from '../reducers/catalog.reducer';

export const getCatalogListState = createFeatureSelector<fromCatalog.State>('catalog');

export const getCatalogList = createSelector(
    getCatalogListState,
    fromCatalog.getCatalogList
);

export const getCategory = createSelector(
    getCatalogListState,
    fromCatalog.getCategory
);