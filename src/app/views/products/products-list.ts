import { Component, Input } from '@angular/core';
import { Product } from '../../models';


@Component({
    selector: 'app-products-list',
    template: `
        <div class="container">
            <div class="row">
                <app-products-item *ngFor="let product of products" [product]="product" class="col-md-3"></app-products-item>
            </div>
        </div>
    `
})
export class ProductsList {
    @Input() products: Product[];

    constructor() {}
}