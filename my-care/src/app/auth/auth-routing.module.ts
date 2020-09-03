import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";
import { LoginPageComponent } from "./pages/login-page/login-page.component";
import { AUTH_ROUTE, AUTH_ROUTE_REGISTER, AUTH_ROUTE_RESET_PASSWORD } from "../app-routes";
import { RegisterPageComponent } from "./pages/register-page/register-page.component";
import { RestPasswordPageComponent } from "./pages/rest-password-page/rest-password-page.component";

const routes: Routes = [
    {
        path: '',
        redirectTo: AUTH_ROUTE,
        pathMatch : 'full'
    },
    {
        path: AUTH_ROUTE,
        component: LoginPageComponent
    },
    {
        path: AUTH_ROUTE_REGISTER,
        component: RegisterPageComponent
    },
    {
        path: AUTH_ROUTE_RESET_PASSWORD,
        component: RestPasswordPageComponent
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class AuthRoutingModule { }
