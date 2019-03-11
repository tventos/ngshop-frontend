import { Component } from '@angular/core';
import {Observable} from "rxjs/index";
import {Store} from "@ngrx/store";
import * as fromRoot from "../../store/reducers";
import * as catalogActions from "../../store/actions/catalog.action";

@Component({
    selector: 'app-header-layout',
    styleUrls: ['./scss/header.layout.scss'],
    template: `
        <header>
            <nav class="navbar navbar-light bg-light">
                <div class="container">
                    <a routerLink="/" class="navbar-brand">Shop</a>

                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <a class="nav-link" routerLink="catalog">
                                Каталог <span class="sr-only"></span>
                            </a>
                            <ul class="dropdown-menu">
                                <a *ngFor="let category of categories$ | async" class="dropdown-item" routerLink="/catalog/{{category.uri}}">{{category.name}}</a>
                            </ul>
                        </li>    
                    </ul>
                    
                    <div class="form-inline">
                        <app-minicart></app-minicart>
                    </div>
                </div>
            </nav>
        </header>
    `
})
export class HeaderLayout {
    categories$: Observable<any>;

    constructor(private store: Store<fromRoot.State>) {
        this.store.dispatch(new catalogActions.LoadCatalogList());

        this.categories$ = store.select(fromRoot.getCatalogList);
    }
}