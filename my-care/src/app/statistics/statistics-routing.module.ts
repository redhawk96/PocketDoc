import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";
import { SatisticsOverviewPageComponent } from "./pages/satistics-overview-page/satistics-overview-page.component";

const routes: Routes = [
    {
        path: '',
        component: SatisticsOverviewPageComponent
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class StatisticsRoutingModule { }
