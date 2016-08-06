"use strict";
var router_1 = require('@angular/router');
var user_component_1 = require('./user/user.component');
var routes = [
    {
        path: 'user',
        component: user_component_1.UserComponent
    },
    {
        path: '',
        redirectTo: '/user',
        pathMatch: 'full'
    },
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.route.js.map