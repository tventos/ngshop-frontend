import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import * as fromRoot from '../store/reducers';
import * as catalogActions from '../store/actions/catalog.action';
import * as fromModels from '../models';

@Component({
    selector: 'app-catalog-view-controller',
    template: `
      <div class="container">
          <h1>
              {{(category$ | async)?.name}}
          </h1>
      </div>
  `,
})
export class CatalogViewController {
    private routeSubscription: Subscription;
    private uri: string;

    category$: Observable<any>;

    constructor(
        private store: Store<fromRoot.State>,
        private route: ActivatedRoute,
        private router: Router,
        private titleService: Title
    ) {
        this.routeSubscription = route.params.subscribe(params=>this.uri = params['uri']);
        this.store.dispatch(new catalogActions.LoadCategory({"uri": this.uri}));

        this.category$ = store.select(fromRoot.getCategory);

        this.titleService.setTitle('Категория');
    }
}