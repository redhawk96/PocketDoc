import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";
import { AlertOverviewPageComponent } from "./pages/alert-overview-page/alert-overview-page.component";
import { ALERT_ROUTE } from "../app-routes";

const routes: Routes = [
    {
        path: '',
        redirectTo: ALERT_ROUTE,
        pathMatch : 'full'
    },
    {
        path: ALERT_ROUTE,
        component: AlertOverviewPageComponent
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class AlertRoutingModule { }
