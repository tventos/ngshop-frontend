import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import * as fromRoot from '../store/reducers';
import * as catalogActions from '../store/actions/catalog.action';
import * as productActions from '../store/actions/products.action';

@Component({
    selector: 'app-catalog-view-controller',
    template: `
      <div class="container">
          <h1>
              {{(category$ | async)?.name}}
          </h1>
      </div>

      <app-products-list [products]="products$ | async"></app-products-list>
  `,
})
export class CatalogViewController {
    private routeSubscription: Subscription;
    private uri: string;

    category$: Observable<any>;
    products$: Observable<any>;

    constructor(
        private store: Store<fromRoot.State>,
        private route: ActivatedRoute,
        private router: Router,
        private titleService: Title
    ) {
        this.routeSubscription = route.params.subscribe(params => {
            this.uri = params['uri'];
        });
    }

    ngOnInit() {

        this.route.params.forEach(params => {
            this.store.dispatch(new catalogActions.LoadCategory({"uri": this.uri}));
            this.category$ = this.store.select(fromRoot.getCategory);
            this.loadProducts({});
        });
    }

    ngOnDestroy(){
        let destroy = this.category$.subscribe();
        destroy.unsubscribe();
    }

    loadProducts(input: any = '', limit: number = 12, offset: number = 0) {
        console.log(JSON.stringify(input));

        this.category$.pipe().subscribe(res => {
            if (res) {
                let obj = JSON.parse(JSON.stringify(res));
                this.titleService.setTitle(obj.name);

                this.store.dispatch(new productActions.LoadProducts({category_id: obj._id, limit:limit, offset: offset, input: input}));
                this.products$ = this.store.select(fromRoot.getProducts);
            }
        });
    }
}