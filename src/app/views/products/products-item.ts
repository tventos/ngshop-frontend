import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute, Router } from "@angular/router";

import * as fromModels  from '../../models';
import * as fromRoot from '../../store/reducers';
import * as fromService from '../../services';
import * as cartAction from '../../store/actions/cart.action';
import {Subscription} from "rxjs/index";

@Component({
    selector: 'app-products-item',
    template: `
        <div class="card" style="margin-top: 2rem">
            <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Image cap"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="40%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
            <div class="card-body">
                <h5 class="card-title"><a [routerLink]="[product.uri]">{{product.name}}</a></h5>
                <p class="card-text">{{product.description}}</p>
                <button (click)="onAdd(product)" class="btn btn-primary">В корзину</button>
                <span class="float-right">
                    {{product.price}} ₽
                </span>
            </div>
        </div>
    `
})
export class ProductsItem {
    @Input() product: fromModels.Product[];

    private routeSubscription: Subscription;
    public uri: string;

    constructor(
        private store: Store<fromRoot.State>,
        private CartService: fromService.CartService,
        private route: ActivatedRoute,
        private router: Router,
    ) {
        this.routeSubscription = route.params.subscribe(params => {
            this.uri = params['uri'];
        });
    }

    onAdd(product: fromModels.Product) {
        this.store.dispatch(new cartAction.AddCart(this.CartService.addToCart(product)));
    }
}