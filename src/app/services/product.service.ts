import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import 'rxjs/add/observable/throw';

import { Apollo } from "apollo-angular";
import gql from 'graphql-tag';

@Injectable({providedIn: 'root'})
export class ProductService {
    constructor(
        private apollo: Apollo
    ) {}

    getProducts(): Observable<any> {
        return this.apollo.watchQuery<any>({
            query: gql`
                {
                    products {
                        list {
                          _id,
                          name,
                          description,
                          price
                        },
                        count,
                        countTotal
                    }
                }
            `
        }).valueChanges.pipe(
            map(result => result.data.products.list)
        )
    }
}