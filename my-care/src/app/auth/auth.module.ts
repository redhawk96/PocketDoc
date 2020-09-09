import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule, NativeScriptHttpClientModule } from '@nativescript/angular';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterAccountFormComponent } from './components/register-account-form/register-account-form.component';
import { RestPasswordFormComponent } from './components/rest-password-form/rest-password-form.component';
import { RestPasswordPageComponent } from './pages/rest-password-page/rest-password-page.component';
import { AuthRoutingModule } from './auth-routing.module';
import { NativeScriptUIDataFormModule } from 'nativescript-ui-dataform/angular';
import { CityService } from '~/lib/base/services/city.service';
import { RegisterProfileFormComponent } from './components/register-profile-form/register-profile-form.component';
import { AuthService } from '~/lib/base/services/auth.service';
import { UserService } from '~/lib/base/services/user.service';
import { ModuleWithProviders } from '@angular/compiler/src/core';

@NgModule({
    declarations: [
        LoginPageComponent,
        RegisterPageComponent,
        LoginFormComponent,
        RegisterProfileFormComponent,
        RegisterAccountFormComponent,
        RestPasswordFormComponent,
        RestPasswordPageComponent
    ],
    imports: [
        NativeScriptCommonModule,
        AuthRoutingModule,
        NativeScriptUIDataFormModule,
        NativeScriptRouterModule,
        NativeScriptHttpClientModule
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    providers: [
        CityService,
        AuthService
    ]
})
export class AuthModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: AuthModule,
            providers: [UserService]
        };
    }
}
