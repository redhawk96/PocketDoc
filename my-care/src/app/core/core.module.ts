import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule, NativeScriptHttpClientModule } from '@nativescript/angular';
import { SplashScreenPageComponent } from './pages/splash-screen-page/splash-screen-page.component';
import { LoadingPageComponent } from './pages/loading-page/loading-page.component';
import { CoreRoutingModule } from './core-routing.module';
import { AuthRoutingModule } from '../auth/auth-routing.module';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { DeptEpidemicService } from '~/lib/base/services/gov.service';
import { PocketDocEpidemicService } from '~/lib/base/services/pocketdoc.service';
import { EpidemicService } from '~/lib/base/services/epidemic.service';
import { UserService } from '~/lib/base/services/user.service';

@NgModule({
    declarations: [
        SplashScreenPageComponent,
        LoadingPageComponent
    ],
    imports: [
        NativeScriptCommonModule,
        CoreRoutingModule,
        AuthRoutingModule,
        NativeScriptRouterModule,
        NativeScriptHttpClientModule
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    providers: [
        PocketDocEpidemicService,
        DeptEpidemicService
    ]
})
export class CoreModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: [
                EpidemicService
            ]
        };
    }
}
