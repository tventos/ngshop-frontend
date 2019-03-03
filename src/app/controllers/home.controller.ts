import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromRoot from '../store/reducers';
import * as productActions from '../store/actions/products.action';
import * as fromModels from '../models';

@Component({
  selector: 'app-home-controller',
  template: `
      <app-products-list [products]="products$ | async"></app-products-list>
  `,
})
export class HomeController {
  products$: Observable<fromModels.Product[]>;

  constructor(
      private store: Store<fromRoot.State>
  ) {
      this.products$ = store.select(fromRoot.getProducts);
      this.store.dispatch(new productActions.LoadProducts());
  }
}