import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule, NativeScriptHttpClientModule } from '@nativescript/angular';
import { SplashScreenPageComponent } from './pages/splash-screen-page/splash-screen-page.component';
import { LoadingPageComponent } from './pages/loading-page/loading-page.component';
import { AuthService } from '~/lib/base/services/auth.service';
import { UserService } from '~/lib/base/services/user.service';
import { CoreRoutingModule } from './core-routing.module';
import { AuthRoutingModule } from '../auth/auth-routing.module';

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
        AuthService,
        UserService
    ]
})
export class CoreModule { }
