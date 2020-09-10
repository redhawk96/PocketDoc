import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { AlertOverviewPageComponent } from './pages/alert-overview-page/alert-overview-page.component';
import { AlertRoutingModule } from './alert-routing.module';

@NgModule({
    declarations: [
        AlertOverviewPageComponent
    ],
    imports: [
        NativeScriptCommonModule,
        AlertRoutingModule
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AlertModule { }
