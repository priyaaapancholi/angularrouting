import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http'
@Component({
    selector: 'my-app',
    template: `
    <button [routerLink]="['/user']" routerLinkActive="active">ToBeProductOwner</button>
    <router-outlet></router-outlet>
  `,
    directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {
    
}