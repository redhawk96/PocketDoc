import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';
import { SettingsRoutingModule } from './settings-routing.module';

@NgModule({
    declarations: [
        ProfilePageComponent,
        ProfileFormComponent
    ],
    imports: [
        NativeScriptCommonModule,
        SettingsRoutingModule
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SettingsModule { }
