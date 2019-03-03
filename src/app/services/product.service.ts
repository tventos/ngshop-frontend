import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/observable/throw';

@Injectable({providedIn: 'root'})
export class ProductService {
    constructor(private http: HttpClient) {}

    getProducts(): Observable<any> {
        return this.http
            .get(`/assets/products.json`)
            .pipe(catchError((error: any) => Observable.throw(error.json())));
    }
}