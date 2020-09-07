import { Component, OnInit, ViewChild } from '@angular/core';
import { RadDataFormComponent } from 'nativescript-ui-dataform/angular';
import { LoginUser } from '~/lib/base/models/loginUser';
import { AuthService } from '~/lib/base/services/auth.service';
import { RouterExtensions } from '@nativescript/angular';
import * as dialogs from "@nativescript/core/ui/dialogs";
import { UserService } from '~/lib/base/services/user.service';
import { MinimalUser } from '~/lib/base/models/MinimalUser';

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
    @ViewChild('loginDataForm', { static: false }) loginForm: RadDataFormComponent;

    private _loginUser: LoginUser;

    constructor(private authService: AuthService, private router: RouterExtensions, private userService : UserService) { }

    ngOnInit(): void {
        this._loginUser = new LoginUser("", "");
    }

    get loginUser(): LoginUser {
        return this._loginUser;
    }

    validateLogin() {
        this.loginForm.dataForm.commitAll();
        if (this.ValidateEmail(this.loginForm.dataForm.source['email'].toString())) {
            if (this.loginForm.dataForm.source['password'].toString().length > 5) {
                this.signinUser(new LoginUser(this.loginForm.dataForm.source['email'], this.loginForm.dataForm.source['password']));
            } else {
                this.setValidatorPopUp('Password is invalid');
            }
        } else {
            this.setValidatorPopUp('Email is invalid');
        }
    }

    ValidateEmail(email) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            return true;
        } else {
            return false
        }
    }

    setValidatorPopUp(text: string) {
        dialogs.alert({
            title: 'Required Field',
            message: text,
            okButtonText: "OK"
        })
    }

    signinUser(user: LoginUser) {
        this.authService.signIn(user).subscribe((res: any) => {
            if (res.localId) {
                // this.userService.setDbUser(new MinimalUser("", "", new Date(), "", "", ""))
                this.router.navigate(['/epidemic']);
            }
        }, () => {
            dialogs.alert({
                title: 'Invalid Credentials',
                message: 'Please make sure entered credentials are valid',
                okButtonText: "OK"
            })
        });
    }
}
