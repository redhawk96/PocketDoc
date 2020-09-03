import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";
import { EPIDEMIC_ROUTE, EPIDEMIC_ROUTE_QUESTIONNAIRE, EPIDEMIC_ROUTE_PRECAUTIONS_INFO, EPIDEMIC_ROUTE_EPIDEMIC_INFO, EPIDEMIC_ROUTE_SYMPTOMS_INFO } from "../app-routes";
import { EpidemicOverviewPageComponent } from "./pages/epidemic-overview-page/epidemic-overview-page.component";
import { EpidemicPageComponent } from "./pages/epidemic-page/epidemic-page.component";
import { SymptomsPageComponent } from "./pages/symptoms-page/symptoms-page.component";
import { PrecautionsPageComponent } from "./pages/precautions-page/precautions-page.component";
import { QuestionnairePageComponent } from "./pages/questionnaire-page/questionnaire-page.component";

const routes: Routes = [
    {
        path: '',
        redirectTo: EPIDEMIC_ROUTE,
        pathMatch: 'full'
    },
    {
        path: EPIDEMIC_ROUTE,
        component: EpidemicOverviewPageComponent
    },
    {
        path: EPIDEMIC_ROUTE_EPIDEMIC_INFO,
        component: EpidemicPageComponent
    },
    {
        path: EPIDEMIC_ROUTE_SYMPTOMS_INFO,
        component: SymptomsPageComponent
    },
    {
        path: EPIDEMIC_ROUTE_PRECAUTIONS_INFO,
        component: PrecautionsPageComponent
    },
    {
        path: EPIDEMIC_ROUTE_QUESTIONNAIRE,
        component: QuestionnairePageComponent
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class EpidemicRoutingModule { }
