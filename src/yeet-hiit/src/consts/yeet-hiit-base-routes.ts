import { Route } from '@angular/router';
import { HomePageComponent } from '../app/pages/home-page/home-page.component';
import { ConfigureTimersPageComponent } from '../app/pages/configure-timers-page/configure-timers-page.component';

export const HomeBaseRoute: string = 'home';
export const ConfigureTimersBaseRoute: string = 'configure-timers'

export const YeetHiitBaseRoutes: Route[] = [
    {
        path: '',
        component: HomePageComponent
    },
    {
        path: HomeBaseRoute,
        component: HomePageComponent
    },
    {
        path: ConfigureTimersBaseRoute,
        component: ConfigureTimersPageComponent
    },
    {
        path: '**',
        redirectTo: HomeBaseRoute
    }
]