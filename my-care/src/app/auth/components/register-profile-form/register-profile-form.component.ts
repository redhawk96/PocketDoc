import { Component, OnInit, ViewChild } from '@angular/core';
import { MinimalUser } from '~/lib/base/models/MinimalUser';
import { RadDataFormComponent } from 'nativescript-ui-dataform/angular';
import { CityService } from '~/lib/base/services/city.service';
import { EventData } from '@nativescript/core/data/observable';
import { Switch } from '@nativescript/core/ui/switch';
import * as dialogs from "@nativescript/core/ui/dialogs";

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

    constructor(cityService: CityService) {
        this.cities = cityService.getCities()
    }

    ngOnInit() {
        this._user = new MinimalUser("", "", new Date(), "", "Katunayake", "+94");
    }

    get user(): MinimalUser {
        return this._user;
    }

    onProfileCheckedChange(args: EventData) {
        let sw = args.object as Switch;
        this.isProfileFormReady = sw.checked; // boolean
        // if (!this.isAddressSame) {
        //     dialogs.prompt({
        //         title: "Location Update",
        //         message: "Please enter you current location",
        //         okButtonText: "Update",
        //         cancelable: true,
        //         inputType: inputType.text,
        //         capitalizationType: capitalizationType.all
        //     }).then((result: PromptResult) => {
        //         this.locatedCity = result.text.toUpperCase();
        //     });
        // }
    }

    validateProfileCreation(): boolean {
        this.profileForm.dataForm.commitAll();
        if (this.profileForm.dataForm.source['firstName'].toString().length > 3) {
            if (this.profileForm.dataForm.source['lastName'].toString().length > 3) {
                if (this.profileForm.dataForm.source['nic'].toString().length > 9 && this.profileForm.dataForm.source['nic'].toString().length < 13) {
                    if (this.profileForm.dataForm.source['phoneNumber'].toString().length > 11 && this.profileForm.dataForm.source['phoneNumber'].toString().length < 13) {
                        return true;
                    } else {
                        this.setValidatorPopUp('Phone number format is invalid');
                        return false;
                    }
                } else {
                    this.setValidatorPopUp('National identification number format is invalid');
                    return false;
                }
            } else {
                this.setValidatorPopUp('Last name is required');
                return false;
            }
        } else {
            this.setValidatorPopUp('First name is required');
            return false;
        }
    }

    setValidatorPopUp(text: string) {
        dialogs.alert({
            title: 'Required Field',
            message: text,
            okButtonText: "OK"
        })
    }

    public onTap() {
        this.profileForm.dataForm.commitAll();
        console.log(this.profileForm.dataForm.source)
    }
}
