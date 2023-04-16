import {Component} from '@angular/core';

import {faCartShopping, faList, faMagnifyingGlass, faUserLarge, faUserPlus} from '@fortawesome/free-solid-svg-icons'

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
    //icons
    iconMenuMobile = faList
    iconCar = faCartShopping
    iconRegistry = faUserPlus
    iconLogin = faUserLarge
    iconInputSearch = faMagnifyingGlass

    //states
    seeBarMenu = true


    showMenuBar() {
        this.seeBarMenu = !this.seeBarMenu
    }
}
