import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProductsItem, ProductsList } from './products';
import { Minicart } from './cart';

const VIEWS = [
    ProductsItem,
    ProductsList,
    Minicart
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
