import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { SatisticsOverviewPageComponent } from './pages/satistics-overview-page/satistics-overview-page.component';
import { NewCasesCardComponent } from './components/new-cases-card/new-cases-card.component';
import { ActiveCasesCardComponent } from './components/active-cases-card/active-cases-card.component';
import { TotalCasesCardComponent } from './components/total-cases-card/total-cases-card.component';
import { TerminatedCasesCardComponent } from './components/terminated-cases-card/terminated-cases-card.component';
import { RecorveredCasesCardComponent } from './components/recorvered-cases-card/recorvered-cases-card.component';
import { HospitalizedCasesCardComponent } from './components/hospitalized-cases-card/hospitalized-cases-card.component';
import { TreatmentCentersPageComponent } from './pages/treatment-centers-page/treatment-centers-page.component';
import { TreatmentCentersListComponent } from './components/treatment-centers-list/treatment-centers-list.component';
import { TreatmentCenterCardComponent } from './components/treatment-center-card/treatment-center-card.component';
import { StatisticsRoutingModule } from './statistics-routing.module';

@NgModule({
    declarations: [
        SatisticsOverviewPageComponent,
        NewCasesCardComponent,
        ActiveCasesCardComponent,
        TotalCasesCardComponent,
        TerminatedCasesCardComponent,
        RecorveredCasesCardComponent,
        HospitalizedCasesCardComponent,
        TreatmentCentersPageComponent,
        TreatmentCentersListComponent,
        TreatmentCenterCardComponent
    ],
    imports: [
        NativeScriptCommonModule,
        StatisticsRoutingModule
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class StatisticsModule { }
