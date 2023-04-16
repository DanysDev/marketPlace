import {Component, OnInit} from '@angular/core';
import {Product} from "../../interfaces/product.interface";
import {ProductsService} from "../../services/products.service";
import {faArrowLeft, faArrowRight, faBox, faCartShopping} from "@fortawesome/free-solid-svg-icons";

@Component({
    selector: 'app-hero-slider',
    templateUrl: './hero-slider.component.html',
    styleUrls: ['./hero-slider.component.scss']
})
export class HeroSliderComponent implements OnInit {

    iconArrowLeft = faArrowLeft
    iconArrowRight = faArrowRight
    iconCar = faCartShopping
    iconProduct = faBox

    myProducts: Product[] = [
        {
            id: 1,
            title: 'Super Producto Titulado',
            description: 'Esto es una breve descripcion del producto en cuestion para maquetar la pagina',
            price: 750,
            category: {
                id: 1,
                name: 'nombre',
                image: 'aqui va una imagen'
            },
            images: ['assets/relojDigital.png']
        }
    ]

    constructor(private product: ProductsService) {
    }

    ngOnInit(): void {
        this.product.getAllProducts()
            .subscribe(data => {
                this.myProducts = data
            })
    }
}
