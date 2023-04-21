import {Component, OnInit} from '@angular/core';
import {Product} from "../../interfaces/product.interface";
import {faCartShopping, faHeart, faSquareArrowUpRight} from "@fortawesome/free-solid-svg-icons";
import {ProductsService} from "../../services/products.service";
import {StoreService} from "../../services/store.service";

@Component({
    selector: 'app-most-sell',
    templateUrl: './most-sell.component.html',
    styleUrls: ['./most-sell.component.scss']
})
export class MostSellComponent implements OnInit {

    iconCarShoppping = faCartShopping
    iconEye = faHeart
    iconSeeMore = faSquareArrowUpRight


    mostSellProducts: Product[] = [
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
        },
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
        },
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
        },
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
        },
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

    constructor(private productService: ProductsService, private storeService: StoreService) {}

    ngOnInit(): void {
        this.productService.getLimitedProducts(5)
            .subscribe(data => {
                this.mostSellProducts = data
            })
    }

    addProduct(product: Product) {
        this.storeService.addProduct(product)
    }
}
