import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";
import { LoginPageComponent } from "./pages/login-page/login-page.component";
import { AUTH_ROUTE, AUTH_ROUTE_RESET_PASSWORD, AUTH_ROUTE_REGISTER_ACCOUNT, AUTH_ROUTE_REGISTER_PROFILE } from "../app-routes";
import { RegisterPageComponent } from "./pages/register-page/register-page.component";
import { RestPasswordPageComponent } from "./pages/rest-password-page/rest-password-page.component";
import { RegisterProfileFormComponent } from "./components/register-profile-form/register-profile-form.component";

const routes: Routes = [
    {
        path: '',
        component: LoginPageComponent
    },
    {
        path: AUTH_ROUTE_REGISTER_ACCOUNT,
        component: RegisterPageComponent
    },
    {
        path: AUTH_ROUTE_REGISTER_PROFILE,
        component: RegisterProfileFormComponent
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
