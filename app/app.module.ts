import {NativeScriptModule} from "nativescript-angular/platform";
import {NgModule} from "@angular/core";
import {NativeScriptRouterModule} from "nativescript-angular/router";

import {
    authProviders,
    appRoutes
} from "./app.routing";
import {AppComponent} from "./app.component";
import {
    setStatusBarColors,
    BackendService,
    LoginService
} from "./shared";

import {LoginModule} from "./login/login.module";
import {GroceriesModule} from "./groceries/groceries.module";

setStatusBarColors();

import notify from "./NotifyReducer";
import {Lib} from "./Lib";
import {AppStore} from "angular2-redux-util";

function counter(state, action) {
    if (typeof state === 'undefined') {
        return 0
    }
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}

var providing = [{
    provide: AppStore,
    useFactory: Lib.StoreFactory({
        counter
    })
}];

@NgModule({
    providers: [BackendService, LoginService, authProviders, providing],
    imports: [NativeScriptModule, NativeScriptRouterModule, NativeScriptRouterModule.forRoot(appRoutes), LoginModule, GroceriesModule,],
    declarations: [AppComponent,],
    bootstrap: [AppComponent]
})
export class AppModule {
}
