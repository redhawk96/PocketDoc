import { Component, OnInit } from '@angular/core';
import { EpidemicService } from '~/lib/base/services/epidemic.service';
import { EpidemicProfile } from '~/lib/base/models/EpidemicProfile';
import { EventData } from '@nativescript/core/data/observable';
import { Switch } from '@nativescript/core/ui/switch';
import * as dialogs from "@nativescript/core/ui/dialogs";
import * as geoLocation from "nativescript-geolocation";
// tslint:disable: no-duplicate-imports
import { capitalizationType, inputType, PromptResult } from '@nativescript/core/ui/dialogs';
import { Button } from '@nativescript/core';
import { UserService } from '~/lib/base/services/user.service';

// tslint:disable: newline-before-return
@Component({
    selector: 'app-questionnaire-form',
    templateUrl: './questionnaire-form.component.html',
    styleUrls: ['./questionnaire-form.component.css']
})
export class QuestionnaireFormComponent implements OnInit {
    isSubmitEnabled: boolean = false;
    private epidemicProfile: EpidemicProfile;
    private _currentGeoLocation: any = null;
    private _questions: any = [];
    private selectedOptionObj: any = {};
    isAddressSame: boolean = true;
    private locatedCity: string = null;

    constructor(private epidemicService: EpidemicService, private userService: UserService) {
        this.epidemicService.getEpidemicProfile().subscribe((eProfile: EpidemicProfile) => {
            this.epidemicProfile = eProfile;
            this._questions = eProfile.questionnaire.questions;
        });
    }

    get questions() {
        return this._questions
    }

    ngOnInit(): void {
        setTimeout(() => {
            this.isSubmitEnabled = true;
        }, 5000);
    }

    private getGeoLocation(): void {
        geoLocation.isEnabled().then(enabled => {
            if (!enabled) {
                geoLocation.enableLocationRequest().then(() => this.locateGeoPoints());
            } else {
                this.locateGeoPoints();
            }
        });
    }

    getformattedOptionArray(loopIndex: number) {
        const formattedOptionArray: any = [];
        this.questions[loopIndex].options.forEach((opt: any) => {
            formattedOptionArray.push(opt.option);
        });
        return formattedOptionArray;
    }

    private locateGeoPoints(): void {
        geoLocation.watchLocation(location => {
            this._currentGeoLocation = location;
        }, error => {
            alert(error);
        }, {
            desiredAccuracy: 3,
            updateDistance: 10,
            minimumUpdateTime: 1000 * 1
        });
    }

    private getConstructedFormData() {
        // Getting the selected options
        const selectOptionArray = [];
        Object.keys(this.selectedOptionObj).forEach(key => {
            selectOptionArray.push({
                id: key,
                option: this.selectedOptionObj[key]
            })
        })

        // Getting location
        if (this.locatedCity == null) {
            console.log(this.userService.getDbUser())
            this.locatedCity = this.userService.getDbUser().city
        }

        // Constructing the submission to JSON object
        const submissionData: any = {
            questionnaire: {
                questions: selectOptionArray
            },
            epidemic: {
                id: this.epidemicProfile.id
            },
            user: {
                email: this.userService.getDbUser().email,
                addressInfo: {
                    city: {
                        id: this.locatedCity
                    },
                    geoLocation: {
                        longitude: this._currentGeoLocation.longitude,
                        latitude: this._currentGeoLocation.latitude
                    }
                }
            }
        }
        return submissionData
    }

    onCheckedChange(args: EventData) {
        const sw = args.object as Switch;
        this.isAddressSame = sw.checked; // boolean
        if (!this.isAddressSame) {
            dialogs.prompt({
                title: "Location Update",
                message: "Please enter you current location",
                okButtonText: "Update",
                cancelable: true,
                inputType: inputType.text,
                capitalizationType: capitalizationType.all
            }).then((result: PromptResult) => {
                this.locatedCity = result.text.toUpperCase();
            });
        }
    }

    onSubmitQuestionnaire() {
        if (Object.keys(this.selectedOptionObj).length === this._questions.length) {
            dialogs.confirm({
                title: 'Share Results',
                message: "Please note that your location and results will be shared with the local health authorities to ensure higher accuracy",
                okButtonText: "Yes",
                cancelButtonText: "No"
            }).then((result: boolean) => {
                if (result === true) {
                    this.getGeoLocation();
                    if (this._currentGeoLocation != null) {
                        this.epidemicService.submitEpidemicQuestionnaire(this.getConstructedFormData()).subscribe((res: any) => {
                            dialogs.alert({
                                title: "Results",
                                message: res.result,
                                okButtonText: "OK"
                            });
                        });
                    }
                } else {
                    dialogs.alert({
                        title: 'Required',
                        message: "Questionnaire not shared. Please note that location and results sharing is required to determine accuracy",
                        okButtonText: "OK"
                    })
                }
            });
        } else {
            dialogs.alert({
                title: 'Required',
                message: "Please make sure you selected answers for the entire questionnaire as all questions must be answered to determine accuracy",
                okButtonText: "OK"
            })
        }
    }

    // onProgressBarLoaded(args) {
    //     let progressBar = args.object as Progress;
    //     progressBar.value = 50; // Initial value
    //     progressBar.maxValue = 100; // Maximum value
    //     setInterval(() => {
    //         progressBar.value += 5;
    //     }, 100);
    // }

    // onValueChanged(args) {
    //     if (args.value === 100) {
    //         this.isQuestionnaireLoaded = true;
    //         setTimeout(() => {
    //             this.isSubmitEnabled = true;
    //         }, 2000)
    //     }
    // }


    onOptionSelect(args, questionIndex: number, optionIndex: number) {
        const button = args.object as Button;
        button.className = "bg-primary";
        this.selectedOptionObj["Q" + (questionIndex + 1)] = 'O' + (optionIndex + 1);
    }

}
