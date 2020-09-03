import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { RestPasswordFormComponent } from './components/rest-password-form/rest-password-form.component';
import { RestPasswordPageComponent } from './pages/rest-password-page/rest-password-page.component';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
    declarations: [
        LoginPageComponent,
        RegisterPageComponent,
        LoginFormComponent,
        RegisterFormComponent,
        RestPasswordFormComponent,
        RestPasswordPageComponent
    ],
    imports: [
        NativeScriptCommonModule,
        AuthRoutingModule
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AuthModule { }
