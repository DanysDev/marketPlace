import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeCenterComponent} from "./layout/home-center/home-center.component";
import {HomeComponent} from "./home/home.component";


const routes: Routes = [
    {
        path: '',
        component: HomeCenterComponent,
        children: [
            {
                path: '',
                redirectTo: '/home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                component: HomeComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
