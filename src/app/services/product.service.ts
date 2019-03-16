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

    getProducts(action): Observable<any> {
        let category_id = JSON.stringify(action.payload.category_id);
        let limit = JSON.stringify(action.payload.limit) ? JSON.stringify(action.payload.limit) : 12;
        let offset = JSON.stringify(action.payload.offset) ? JSON.stringify(action.payload.offset) : 0;
        let filter = "";

        if (JSON.stringify(action.payload.input).length > 3) {
            if (JSON.stringify(action.payload.input.name).length > 1) {
                filter += 'name: "' + action.payload.input.name +'"';
            }
        }

        return this.apollo.watchQuery<any>({
            query: gql`
                {
                    products(
                        category_id: ${category_id}, 
                        limit: ${limit}, 
                        offset: ${offset}, 
                        input: {
                            ${filter}
                        }
                    ) {
                        list {
                          _id,
                          name,
                          uri,
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