import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../interfaces/product.interface";

@Injectable({
    providedIn: 'root'
})
export class ProductsService {
    //TODO: Puse 1 producto de límite para probar
    urlProducts = 'https://api.escuelajs.co/api/v1/products?offset=1&limit=1'
    limitProducts = 'https://api.escuelajs.co/api/v1/products?offset=0&limit='

    constructor(private http: HttpClient) {
    }

    getAllProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.urlProducts)
    }

    getLimitedProducts(limite: number): Observable<Product[]> {
        return this.http.get<Product[]>(`${this.limitProducts}${limite}`)
    }
}
