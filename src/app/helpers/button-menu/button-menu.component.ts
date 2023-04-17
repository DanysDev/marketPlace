import {Component} from '@angular/core';

import {faAngleDown} from '@fortawesome/free-solid-svg-icons'
import {ProductsService} from "../../services/products.service";
import {Product} from "../../interfaces/product.interface";

@Component({
    selector: 'app-button-menu',
    templateUrl: './button-menu.component.html',
    styleUrls: ['./button-menu.component.scss']
})
export class ButtonMenuComponent {

    iconMenuDown = faAngleDown

    buttonsMenu: Product[] = []

    constructor(private productService: ProductsService) {
    }

    ngOnInit(): void {
        this.productService.getLimitedProducts(8)
            .subscribe(data => {
                this.buttonsMenu = data
            })
    }

}
