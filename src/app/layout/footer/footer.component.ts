import {Component} from '@angular/core';
import {faHeart, faPhone, faPhoneSquare} from "@fortawesome/free-solid-svg-icons";

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

    iconLove = faHeart
    iconPhone = faPhone
    iconWhatsapp = faPhoneSquare

}
