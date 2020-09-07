import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptHttpClientModule } from '@nativescript/angular';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';
import { SettingsRoutingModule } from './settings-routing.module';
import { EpidemicService } from '~/lib/base/services/epidemic.service';

@NgModule({
    declarations: [
        ProfilePageComponent,
        ProfileFormComponent
    ],
    imports: [
        NativeScriptCommonModule,
        SettingsRoutingModule,
        NativeScriptHttpClientModule
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SettingsModule { }
