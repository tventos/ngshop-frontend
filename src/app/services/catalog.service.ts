import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import 'rxjs/add/observable/throw';

import { Apollo } from "apollo-angular";
import gql from 'graphql-tag';

@Injectable({providedIn: 'root'})
export class CatalogService {
    constructor(
        private apollo: Apollo
    ) {}

    getCatalog(): Observable<any> {
        return this.apollo.watchQuery<any>({
            query: gql`
                {
                  categories {
                    name,
                    uri
                  }
                }
            `
        }).valueChanges.pipe(
            map(result => result.data.categories)
        )
    }

    getCatalogByUri(action: any): Observable<any> {
        let uri = action.payload.uri;

        return this.apollo.watchQuery<any>({
            query: gql`
                {
                  category(uri:"${uri}") {
                    name,
                    uri
                  }
                }
            `
        }).valueChanges.pipe(
            map(result => result.data.category)
        )
    }
}