import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { SplashScreenPageComponent } from './pages/splash-screen-page/splash-screen-page.component';
import { LoadingPageComponent } from './pages/loading-page/loading-page.component';

@NgModule({
    declarations: [
        SplashScreenPageComponent,
        LoadingPageComponent
    ],
    imports: [
        NativeScriptCommonModule
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class CoreModule { }
