import { Component, OnInit, ViewChild } from '@angular/core';
import { RadDataFormComponent } from 'nativescript-ui-dataform/angular';
import { CityService } from '~/lib/base/services/city.service';
import { EventData } from '@nativescript/core/data/observable';
import { Switch } from '@nativescript/core/ui/switch';
import * as dialogs from "@nativescript/core/ui/dialogs";
import { LoginUser } from '~/lib/base/models/loginUser';
import { RouterExtensions } from '@nativescript/angular';
import { AuthService } from '~/lib/base/services/auth.service';
import { UserService } from '~/lib/base/services/user.service';
import { validateEmail } from '~/lib/base/utils/loginUtils';
// tslint:disable: no-shadowed-variable
// tslint:disable: no-string-literal
// tslint:disable: newline-before-return
@Component({
    selector: 'app-register-account-form',
    templateUrl: './register-account-form.component.html',
    styleUrls: ['./register-account-form.component.css']
})
export class RegisterAccountFormComponent implements OnInit {
    @ViewChild('registerAccountDataForm', { static: false }) accountForm: RadDataFormComponent;

    private _loginUser: LoginUser;
    cities: string;
    isAccountFormReady: boolean = true;
    creationInProgress: boolean = false;

    constructor(cityService: CityService, private authService: AuthService, private userService: UserService, private router: RouterExtensions) {
        this.cities = cityService.getCities()
    }

    ngOnInit() {
        this._loginUser = new LoginUser("", "");
    }

    get loginUser(): LoginUser {
        return this._loginUser;
    }

    onAccountCheckedChange(args: EventData) {
        const sw = args.object as Switch;
        this.isAccountFormReady = sw.checked; // boolean
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

    signUpUser() {
        this.accountForm.dataForm.commitAll();
        const email = this.accountForm.dataForm.source['email'];
        const password = this.accountForm.dataForm.source['password'];
        const user: LoginUser = new LoginUser(email, password);

        if (this.validateCredentials(user)) {
            this.creationInProgress = true;

            this.authService.signUp(user).subscribe((res: any) => {
                if (res.localId) {
                    this.userService.setSignUpUser(new LoginUser(res.email, null, res.localId))
                    this.displayPopUpDialog('Account Creation', 'Congratulations your account has been created. To complete registration please setup up you medical profile');
                    setTimeout(() => {
                        this.router.navigate(['/auth/registerProfile'], {
                            transition: {
                                name: 'slide'
                            },
                            clearHistory: true
                        });
                    }, 800)
                }
            }, () => {
                this.creationInProgress = false;
                this.displayPopUpDialog('Existing Email', 'Account already exists with the provided email. Please press back key to return to login');
            });
        }
    }
}
