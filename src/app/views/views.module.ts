import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProductsItem, ProductsList } from './products';
import { Minicart } from './cart';
import { CatalogItem } from "./catalog";

const VIEWS = [
    ProductsItem,
    ProductsList,
    Minicart,
    CatalogItem
];

@NgModule({
    declarations: [
        ...VIEWS
    ],
    imports: [
        RouterModule,
        CommonModule
    ],
    providers: [],
    exports: [
        ...VIEWS
    ]
})
export class ViewsModule { }
