import { provideRouter, RouterConfig }  from '@angular/router';
import { UserComponent } from './user/user.component';
const routes: RouterConfig = [
    {
        path: 'user',
        component: UserComponent
    },
    {
        path: '',
        redirectTo: '/user',
        pathMatch: 'full'
    },
];
export const appRouterProviders = [
    provideRouter(routes)
];
