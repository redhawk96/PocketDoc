import { Component, OnInit, ViewChild } from '@angular/core';
import { MinimalUser } from '~/lib/base/models/MinimalUser';
import { RadDataFormComponent } from 'nativescript-ui-dataform/angular';
import { CityService } from '~/lib/base/services/city.service';
import { EventData } from '@nativescript/core/data/observable';
import { Switch } from '@nativescript/core/ui/switch';
import * as dialogs from "@nativescript/core/ui/dialogs";
import { AuthService } from '~/lib/base/services/auth.service';
import { UserService } from '~/lib/base/services/user.service';
import { LoginUser } from '~/lib/base/models/loginUser';
import { RouterExtensions } from '@nativescript/angular';
// tslint:disable: newline-before-return
// tslint:disable: no-string-literal
@Component({
    selector: 'app-register-profile-form',
    templateUrl: './register-profile-form.component.html',
    styleUrls: ['./register-profile-form.component.css']
})
export class RegisterProfileFormComponent implements OnInit {
    @ViewChild('registerUserDataForm', { static: false }) profileForm: RadDataFormComponent;

    private _user: MinimalUser;
    cities: string;
    isProfileFormReady: boolean = false;

    constructor(private cityService: CityService, private authService: AuthService, private userService: UserService, private router: RouterExtensions) {
        this.cities = this.cityService.getCities()
    }

    ngOnInit() {
        this._user = new MinimalUser("", "", new Date(), "", "Katunayake", "+94");
    }

    get user(): MinimalUser {
        return this._user;
    }

    onProfileCheckedChange(args: EventData) {
        const sw = args.object as Switch;
        this.isProfileFormReady = sw.checked; // boolean
    }

    displayPopUpDialog(dTitle: string, text: string) {
        dialogs.alert({
            title: dTitle,
            message: text,
            okButtonText: "OK"
        })
    }

    validateProfileCreation(firstName: string, lastName: string, nic: string, phoneNumber: string): boolean {
        this.profileForm.dataForm.commitAll();
        if (firstName.length > 3) {
            if (lastName.length > 3) {
                if (nic.length > 9 && nic.length < 13) {
                    if (phoneNumber.length > 11 && phoneNumber.length < 13) {
                        return true;
                    } else {
                        this.displayPopUpDialog('Missing Required Field', 'Please make sure entered phone number format is of valid format');
                        return false;
                    }
                } else {
                    this.displayPopUpDialog('Missing Required Field', 'Please make sure entered national identification number format is of valid format');
                    return false;
                }
            } else {
                this.displayPopUpDialog('Missing Required Field', 'Last name is a required field, please make sure you enter last name');
                return false;
            }
        } else {
            this.displayPopUpDialog('Missing Required Field', 'First name is a required field, please make sure you enter first name');
            return false;
        }
    }

    setUpProfile() {
        const firstName = this.profileForm.dataForm.source['firstName'];
        const lastName = this.profileForm.dataForm.source['lastName'];
        const dob = this.profileForm.dataForm.source['dob'];
        const nic = this.profileForm.dataForm.source['nic'];
        const city = this.profileForm.dataForm.source['city'];
        const phoneNumber = this.profileForm.dataForm.source['phoneNumber'];

        if (this.validateProfileCreation(firstName, lastName, nic, phoneNumber)) {
            const signUpUser: LoginUser = this.userService.getSignUpUser()
            const user = new MinimalUser(firstName, lastName, dob, nic, city, phoneNumber, signUpUser.email, signUpUser.uid)
            this.authService.setUpProfile(user).subscribe((res: any) => {
                this.userService.setDbUser(user);
                this.displayPopUpDialog('Profile Creation', res.result);
                setTimeout(() => {
                    if (res.status === true) {
                        this.router.navigate(['/epidemic']);
                    }
                }, 1000)
            })
        }
    }
}
