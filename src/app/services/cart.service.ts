import { Injectable } from '@angular/core';
import 'rxjs/add/observable/throw';

import * as fromModels from '../models';

@Injectable({providedIn: 'root'})
export class CartService {
    products: any[] = [];
    cartCost: number = 0;

    constructor() {}

    addToCart(product: fromModels.Product, quantity: number = 1, from: string = 'category') {
        if (this.getCart()) {
            this.products = this.getCart().products;
            this.cartCost = this.getCart().cartCost;
        }

        let exists = false;

        this.products = this.products.map(_product => {
            if(_product.product._id == product._id){
                if (from == 'category') {
                    _product.quantity += quantity;
                } else {
                    if (quantity > 0) {
                        _product.quantity = quantity;
                    }
                }

                exists = true;
            }

            this.setCartCost();

            return _product
        });

        if(!exists){
            this.cartCost += product.price;

            this.products.push({
                product: product,
                quantity: quantity
            })
        }

        return this.updateCart();
    }

    getCart() {
        return JSON.parse(localStorage.getItem('cart'));
    }

    removeProduct(product: fromModels.Product) {
        if (this.getCart()) {
            this.products = this.getCart().products;
            this.cartCost = this.getCart().cartCost;
        }

        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].product._id === product._id) {
                this.cartCost -= this.products[i].product.price * this.products[i].quantity;

                this.products.splice(i, 1);

                break;
            }
        }

        this.updateCart();
    }

    setCartCost() {
        let cartCost = 0;

        this.products.map(_product => {
            cartCost += _product.product.price * _product.quantity;
        });

        this.cartCost = cartCost;
    }

    updateCart() {
        let result = {products: this.products, cartTotal: this.products.length, cartCost: this.cartCost};

        localStorage.setItem('cart', JSON.stringify(result));

        return result;
    }
}