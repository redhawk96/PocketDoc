import { Component, OnInit, ViewChild } from '@angular/core';
import { RadDataFormComponent } from 'nativescript-ui-dataform/angular';
import { LoginUser } from '~/lib/base/models/loginUser';
import { AuthService } from '~/lib/base/services/auth.service';
import { RouterExtensions } from '@nativescript/angular';
import * as dialogs from "@nativescript/core/ui/dialogs";
import { UserService } from '~/lib/base/services/user.service';
import { MinimalUser } from '~/lib/base/models/MinimalUser';
import { validateEmail } from '~/lib/base/utils/loginUtils';
// tslint:disable: no-shadowed-variable
// tslint:disable: no-string-literal
// tslint:disable: newline-before-return
@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
    @ViewChild('loginDataForm', { static: false }) loginForm: RadDataFormComponent;

    private _loginUser: LoginUser;
    loginInProgress: boolean = false;

    constructor(private authService: AuthService, private router: RouterExtensions, private userService: UserService) { }

    ngOnInit(): void {
        this._loginUser = new LoginUser("", "");
    }

    get loginUser(): LoginUser {
        return this._loginUser;
    }

    displayPopUpDialog(dTitle: string, text: string) {
        dialogs.alert({
            title: dTitle,
            message: text,
            okButtonText: "OK"
        })
    }

    validateCredentials(user: LoginUser) {
        if (validateEmail(user.email)) {
            if (user.password.length > 5) {
                return true;
            } else {
                this.displayPopUpDialog('Missing Required Field', 'Please make sure entered password is of valid format. Password requires minimun of 6 characters');
                return false;
            }
        } else {
            this.displayPopUpDialog('Missing Required Field', 'Email is a required field, please make sure you enter email');
            return false;
        }
    }

    signinUser() {
        this.loginForm.dataForm.commitAll();
        const email = this.loginForm.dataForm.source['email'];
        const password = this.loginForm.dataForm.source['password'];
        const user : LoginUser = new LoginUser(email, password);

        if (this.validateCredentials(user)) {
            this.loginInProgress = true;

            this.authService.signIn(user).subscribe((res: any) => {
                if (res.localId) {
                    this.authService.getDbUser(new LoginUser(res.email, null)).subscribe((res: any) => {
                        const dbUser: MinimalUser = res.result;
                        this.userService.setDbUser(dbUser);
                        this.loginInProgress = false;
                        this.router.navigate(['/epidemic']);
                    })
                }
            }, () => {
                this.loginInProgress = false;
                this.displayPopUpDialog('Invalid Credentials', 'Please make sure entered credentials are valid');
            });
        }
    }
}
