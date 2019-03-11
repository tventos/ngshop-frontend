import { Component, Input } from '@angular/core';
import * as fromModels from "../../models";

@Component({
    selector: 'app-catalog-item',
    template: `
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">{{category.name}}</h5>
                <p class="card-text">{{category.name}}</p>
                <a routerLink="/catalog/{{category.uri}}" class="btn btn-primary">Перейти в каталог</a>
            </div>
        </div>
    `
})
export class CatalogItem {
    @Input() category: fromModels.Catalog[];

    constructor() {}
}