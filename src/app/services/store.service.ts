import {Injectable} from '@angular/core';
import {Product} from "../interfaces/product.interface";
import {BehaviorSubject} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class StoreService {

    myShoppingCart: Product[] = []

    private carData = new BehaviorSubject<Product[]>([])
    carData$ = this.carData.asObservable()

    constructor() {}

    addProduct(product: Product) {
        this.myShoppingCart.push(product)
        this.carData.next(this.myShoppingCart)
    }

    getShoppingCart() {
        return this.myShoppingCart
    }

    total = this.myShoppingCart.reduce((sum, item) => {
        return sum + item.price
    }, 0)

}
