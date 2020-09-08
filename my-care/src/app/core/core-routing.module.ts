import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";
import { LoadingPageComponent } from "./pages/loading-page/loading-page.component";

const routes: Routes = [
    {
        path: '',
        component: LoadingPageComponent
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class CoreRoutingModule { }
