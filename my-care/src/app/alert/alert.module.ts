import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { AlertListComponent } from './components/alert-list/alert-list.component';
import { AlertItemComponent } from './components/alert-item/alert-item.component';
import { AlertOverviewPageComponent } from './pages/alert-overview-page/alert-overview-page.component';
import { AlertRoutingModule } from './alert-routing.module';

@NgModule({
    declarations: [
        AlertListComponent,
        AlertItemComponent,
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
