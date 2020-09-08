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
    isAccountCreated: boolean = false;

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
        let sw = args.object as Switch;
        this.isAccountFormReady = sw.checked; // boolean
    }

    validateAccountCreation() {
        this.accountForm.dataForm.commitAll();
        if (this.ValidateEmail(this.accountForm.dataForm.source['email'].toString())) {
            if (this.accountForm.dataForm.source['password'].toString().length > 5) {
                this.createUserAccount(new LoginUser(this.accountForm.dataForm.source['email'], this.accountForm.dataForm.source['password']));
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

    createUserAccount(user: LoginUser) {
        this.authService.signUp(user).subscribe((res: any) => {
            if (res.localId) {
                this.userService.setSignUpUser(new LoginUser(res.email, null, res.localId))
                this.router.navigate(['/auth/registerProfile']);
            }
        }, () => {
            dialogs.alert({
                title: 'Existing Email',
                message: 'Account already exists with the provided email',
                okButtonText: "OK"
            })
        });
    }
}
