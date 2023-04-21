import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome'
import {HttpClientModule} from "@angular/common/http";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './layout/navbar/navbar.component';
import {FooterComponent} from './layout/footer/footer.component';
import {HomeCenterComponent} from './layout/home-center/home-center.component';
import {HomeComponent} from './home/home.component';
import {ProductsComponent} from './components/products/products.component';
import {ProductComponent} from './components/product/product.component';
import {ButtonMenuComponent} from './helpers/button-menu/button-menu.component';
import {HeroSliderComponent} from './components/hero-slider/hero-slider.component';
import {MostSellComponent} from './components/most-sell/most-sell.component';
import {CategoriesComponent} from './components/categories/categories.component';
import {OfertsComponent} from './components/oferts/oferts.component';
import {ContactFormComponent} from './components/contact-form/contact-form.component';
import {SliderLoopComponent} from './components/slider-loop/slider-loop.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent,
        HomeCenterComponent,
        HomeComponent,
        ProductsComponent,
        ProductComponent,
        ButtonMenuComponent,
        HeroSliderComponent,
        MostSellComponent,
        CategoriesComponent,
        OfertsComponent,
        ContactFormComponent,
        SliderLoopComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FontAwesomeModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
