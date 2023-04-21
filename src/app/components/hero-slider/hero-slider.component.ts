import {Component} from '@angular/core';
import {Product} from "../../interfaces/product.interface";
import {faArrowLeft, faArrowRight, faBox, faCartShopping} from "@fortawesome/free-solid-svg-icons";


@Component({
    selector: 'app-hero-slider',
    templateUrl: './hero-slider.component.html',
    styleUrls: ['./hero-slider.component.scss',],
})
export class HeroSliderComponent {

    iconArrowLeft = faArrowLeft
    iconArrowRight = faArrowRight
    iconCar = faCartShopping
    iconProduct = faBox

    myProducts: Product[] = []


    constructor() {
    }
}

