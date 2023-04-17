import {Component, OnInit} from '@angular/core';

import {faCartShopping, faList, faMagnifyingGlass, faUserLarge, faUserPlus} from '@fortawesome/free-solid-svg-icons'



@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
    //icons
    iconMenuMobile = faList
    iconCar = faCartShopping
    iconRegistry = faUserPlus
    iconLogin = faUserLarge
    iconInputSearch = faMagnifyingGlass

    //states
    seeBarMenu = true

    constructor() {
    }

    ngOnInit(): void {
    }

    showMenuBar() {
        this.seeBarMenu = !this.seeBarMenu
    }
}
