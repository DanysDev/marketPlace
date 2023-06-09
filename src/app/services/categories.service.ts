import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "../interfaces/product.interface";

@Injectable({
    providedIn: 'root'
})
export class CategoriesService {

    categories: Category[] = []
    categoriesUrl = 'https://api.escuelajs.co/api/v1/categories'

    constructor(private http: HttpClient) {
    }

    getAllCategories(): Observable<Category[]> {
        return this.http.get<Category[]>(this.categoriesUrl)
    }

    getCategory(id: number): Observable<Category> {
        return this.http.get<Category>(`${this.categoriesUrl}/${id}`)
    }
}
