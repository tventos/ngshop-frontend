import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';

import * as catalogActions from '../actions/catalog.action';
import * as fromServices from '../../services';

@Injectable()
export class CatalogEffect {
    constructor(
        private actions$: Actions,
        private catalogService: fromServices.CatalogService
    ) {}

    @Effect()
    loadCatalog$ = this.actions$.pipe(ofType(catalogActions.LOAD_CATALOG_LIST),
        switchMap(() => {
            return this.catalogService
                .getCatalog()
                .pipe(
                    map(catalog => new catalogActions.LoadCatalogListSuccess(catalog)),
                    catchError(error => of(new catalogActions.LoadCatalogListFail(error)))
                );
        })
    );

    @Effect()
    loadCategory$ = this.actions$.pipe(ofType(catalogActions.LOAD_CATEGORY),
        switchMap((action) => {
            return this.catalogService
                .getCatalogByUri(action)
                .pipe(
                    map(category => new catalogActions.LoadCategorySuccess(category)),
                    catchError(error => of(new catalogActions.LoadCategoryFail(error)))
                );
        })
    );
}