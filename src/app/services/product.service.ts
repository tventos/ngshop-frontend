import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/observable/throw';
import { environment } from "../../environments/environment";

@Injectable({providedIn: 'root'})
export class ProductService {
    private apiUrl = environment.apiUrl;
    private productController = "products";

    constructor(private http: HttpClient) {}

    getProducts(): Observable<any> {
        return this.http
            .get(this.apiUrl + this.productController)
            .pipe(catchError((error: any) => Observable.throw(error.json())));
    }
}