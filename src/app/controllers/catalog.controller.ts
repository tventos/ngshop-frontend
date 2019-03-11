import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromRoot from '../store/reducers';
import * as catalogActions from '../store/actions/catalog.action';
import * as fromModels from '../models';

@Component({
    selector: 'app-catalog-controller',
    template: `
      <div class="container">
          <h1>Каталог</h1>
          
          <div class="row">
              <app-catalog-item *ngFor="let category of catalog$ | async" [category]="category" class="col-md-6"></app-catalog-item>
          </div>
      </div>
  `,
})
export class CatalogController {
    catalog$: Observable<fromModels.Catalog[]>;

    constructor(
        private store: Store<fromRoot.State>
    ) {
        this.catalog$ = store.select(fromRoot.getCatalogList);
        this.store.dispatch(new catalogActions.LoadCatalogList());
    }
}