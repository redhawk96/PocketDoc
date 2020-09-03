import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";
import { STATISTICS_ROUTE, STATISTICS_ROUTE_MEDICAL_CENTERS } from "../app-routes";
import { SatisticsOverviewPageComponent } from "./pages/satistics-overview-page/satistics-overview-page.component";
import { TreatmentCentersPageComponent } from "./pages/treatment-centers-page/treatment-centers-page.component";

const routes: Routes = [
    {
        path: '',
        redirectTo: STATISTICS_ROUTE,
        pathMatch : 'full'
    },
    {
        path: STATISTICS_ROUTE,
        component: SatisticsOverviewPageComponent
    },
    {
        path: STATISTICS_ROUTE_MEDICAL_CENTERS,
        component: TreatmentCentersPageComponent
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class StatisticsRoutingModule { }
