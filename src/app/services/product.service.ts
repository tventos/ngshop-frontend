import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map } from 'rxjs/operators';
import 'rxjs/add/observable/throw';

import { Apollo } from "apollo-angular";
import gql from 'graphql-tag';

@Injectable({providedIn: 'root'})
export class ProductService {
    constructor(
        private http: HttpClient,
        private apollo: Apollo
    ) {}

    getProducts(): Observable<any> {
        return this.apollo.watchQuery<any>({
            query: gql`
                {
                  products(limit: 6) {
                    _id,
                    name,
                    uri,
                    description
                    category {
                      _id,
                      name,
                      uri
                    }
                  }
                }
            `
        }).valueChanges.pipe(
            map(result => result.data.products)
        )
    }
}