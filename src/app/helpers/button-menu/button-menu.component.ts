import {Component} from '@angular/core';

import {faAngleDown} from '@fortawesome/free-solid-svg-icons'

@Component({
    selector: 'app-button-menu',
    templateUrl: './button-menu.component.html',
    styleUrls: ['./button-menu.component.scss']
})
export class ButtonMenuComponent {

    iconMenuDown = faAngleDown

    buttonsMenu: string[] = [
        'Prueba',
        'Prueba',
        'Prueba',
        'Prueba',
        'Prueba',
        'Prueba',
        'Prueba',
        'Prueba',
    ]

}
