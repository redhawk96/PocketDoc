import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";
import { SETTINGS_ROUTE } from "../app-routes";
import { ProfilePageComponent } from "./pages/profile-page/profile-page.component";

const routes: Routes = [
    { path: "", component: ProfilePageComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class SettingsRoutingModule { }
