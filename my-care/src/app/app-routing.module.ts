import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";

const routes: Routes = [
    {
        path: "",
        redirectTo: "/loading",
        pathMatch: "full"
    },
    {
        path : 'loading',
        loadChildren: () => import("~/app/core/core.module").then((m) => m.CoreModule)
    },
    {
        path: "auth",
        loadChildren: () => import("~/app/auth/auth.module").then((m) => m.AuthModule)
    },
    {
        path: "epidemic",
        loadChildren: () => import("~/app/epidemic/epidemic.module").then((m) => m.EpidemicModule)
    },
    {
        path: "statistics",
        loadChildren: () => import("~/app/statistics/statistics.module").then((m) => m.StatisticsModule)
    },
    {
        path: "alert",
        loadChildren: () => import("~/app/alert/alert.module").then((m) => m.AlertModule)
    },
    {
        path: "settings",
        loadChildren: () => import("~/app/settings/settings.module").then((m) => m.SettingsModule)
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
