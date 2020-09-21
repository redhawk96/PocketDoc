import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { SatisticsOverviewPageComponent } from './pages/satistics-overview-page/satistics-overview-page.component';
import { StatisticsRoutingModule } from './statistics-routing.module';
import { DeptEpidemicService } from '~/lib/base/services/gov.service';

@NgModule({
    declarations: [
        SatisticsOverviewPageComponent
    ],
    imports: [
        NativeScriptCommonModule,
        StatisticsRoutingModule
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    providers : [
        DeptEpidemicService
    ]
})
export class StatisticsModule { }
