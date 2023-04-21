import {Component, OnInit} from '@angular/core';

import {faCartShopping, faList, faMagnifyingGlass, faUserLarge, faUserPlus} from '@fortawesome/free-solid-svg-icons'
import {StoreService} from "../../services/store.service";
import {Product} from "../../interfaces/product.interface";


@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    //icons
    iconMenuMobile = faList
    iconCar = faCartShopping
    iconRegistry = faUserPlus
    iconLogin = faUserLarge
    iconInputSearch = faMagnifyingGlass

    //states
    seeBarMenu = true
    productsCar = false
    cantProduct!: number | string
    totalCart!: number
    isProductsCart: Product[] = []

    constructor(private storeService: StoreService) {}

    ngOnInit(): void {
        this.storeService.carData$
            .subscribe(products => {
                this.cantProduct = products.length
                if(this.cantProduct >= 10) {
                    this.cantProduct = '9+'
                }
                this.isProductsCart = products
                this.totalCart = products.reduce((sum, item) => sum + item.price, 0)
            })
    }

    showMenuBar() {
        this.seeBarMenu = !this.seeBarMenu
    }

    showProductsCar() {
        if (this.cantProduct === 0) {
            this.productsCar = false
        }
        else {
            this.productsCar = !this.productsCar
        }
    }

}
