import {Component, OnInit} from '@angular/core';
import {Product} from "../../interfaces/product.interface";
import {faSquareArrowUpRight} from "@fortawesome/free-solid-svg-icons";
import {ProductsService} from "../../services/products.service";

@Component({
    selector: 'app-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

    iconSeeMore = faSquareArrowUpRight

    categories: Product[] = [
        {
            id: 1,
            title: 'Super Producto Titulado',
            description: 'Esto es una breve descripcion del producto en cuestion para maquetar la pagina',
            price: 750,
            category: {
                id: 1,
                name: 'Electrodomesticos',
                image: 'assets/lavadora.png'
            },
            images: ['assets/relojDigital.png']
        }
    ]

    constructor(private categoryService: ProductsService) {
    }

    ngOnInit(): void {
        this.categoryService.getLimitedProducts(5)
            .subscribe(data => {
                this.categories = data
            })
    }

}
