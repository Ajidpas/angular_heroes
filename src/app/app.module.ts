import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {RouterModule} from "@angular/router";

import {HeroesComponent}  from './heroes.component';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from "./hero.service";
import {AppComponent} from "./app.component";
import {DashboardComponent} from "./dashboard.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot([
            {
                path: '',
                redirectTo: '/dashboard',
                pathMatch: 'full'
            },
            {
                path: 'heroes',
                component: HeroesComponent
            },
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'detail/:id',
                component: HeroDetailComponent
            }
        ])],
    declarations: [
        AppComponent,
        HeroDetailComponent,
        HeroesComponent,
        DashboardComponent
    ],
    bootstrap: [
        AppComponent
    ],
    providers: [
        HeroService
    ]
})
export class AppModule {
}
