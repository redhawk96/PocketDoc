import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { EpidemicService } from '~/lib/base/services/epidemic.service';
import { EpidemicProfile } from '~/lib/base/models/EpidemicProfile';
import { RadDataFormComponent } from 'nativescript-ui-dataform/angular';
import { EventData } from '@nativescript/core/data/observable';
import { Switch } from '@nativescript/core/ui/switch';
import * as dialogs from "@nativescript/core/ui/dialogs";
import * as geoLocation from "nativescript-geolocation";
// tslint:disable-next-line: no-duplicate-imports
import { capitalizationType, inputType, PromptResult } from '@nativescript/core/ui/dialogs';
const questionnaireDataFormMetadata = require('./questionnaire-dataForm.json');

@Component({
    selector: 'app-questionnaire-form',
    templateUrl: './questionnaire-form.component.html',
    styleUrls: ['./questionnaire-form.component.css']
})
export class QuestionnaireFormComponent implements OnInit {
    @ViewChildren(RadDataFormComponent) dataformRef: QueryList<RadDataFormComponent>
    isSubmitEnabled: boolean = false;
    private _currentGeoLocation: any = null;
    private _questionnaireMetadata;
    private _questions: any = [];
    isAddressSame: boolean = true;
    private locatedCity: string;

    constructor(private epidemicService: EpidemicService) {
        this.epidemicService.getEpidemicProfile().subscribe((eProfile: EpidemicProfile) => {
            this._questions = eProfile.questionnaire.questions;
        });
        this._questionnaireMetadata = JSON.parse(JSON.stringify(questionnaireDataFormMetadata));
    }

    get questions() {
        return this._questions
    }

    ngOnInit(): void {
        setTimeout(() => {
            this.isSubmitEnabled = true;
        }, 5000);
    }

    getSource() {
        const optionObj = {
            "Select a option": ""
        }
        return optionObj
    }

    getformattedOptionArray(loopIndex: number) {
        const formattedOptionArray: any = [];
        this.questions[loopIndex].options.forEach((opt: any) => {
            formattedOptionArray.push(opt.option);
        });
        return formattedOptionArray;
    }

    getMetadata(loopIndex: number) {
        return this.getRefactoredMetaData(this.getformattedOptionArray(loopIndex));
    }

    private getRefactoredMetaData(values: any) {
        this._questionnaireMetadata.propertyAnnotations = [
            {
                "name": "Select a option",
                "displayName": "Select a option",
                "index": 0,
                "editor": "SegmentedEditor",
                "valuesProvider": values
            }
        ];
        return this._questionnaireMetadata;
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
        let loopIndex: number = 0;
        const submittedQuestions = [];
        this.dataformRef.toArray().forEach(form => {
            form.dataForm.commitAll();
            const selectedOptions: any = {};
            selectedOptions.id = "Q" + (loopIndex + 1);
            selectedOptions.option = "O" + (this.getformattedOptionArray(loopIndex).indexOf(form.dataForm.source["Select a option"]) + 1);
            submittedQuestions.push(selectedOptions)
            loopIndex++;
        });

        // Getting location
        // console.log(selectedCity)

        // Constructing the submission to JSON object
        const submissionData: any = {
            questionnaire: {
                questions: submittedQuestions
            },
            epidemic: {
                id: "CORONAVIRUS"
            },
            user: {
                email: "uditha1003@gmail.com",
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
        };
        return submissionData
    }

    onCheckedChange(args: EventData) {
        let sw = args.object as Switch;
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

    onTap() {

        dialogs.confirm({
            title: 'Share Results',
            message: "Please note that your location and results will be shared with the local health authorities to ensure higher accuracy",
            okButtonText: "Yes",
            cancelButtonText: "No"
        }).then((result: boolean) => {
            if (result === true) {
                this.getGeoLocation();
                if (this._currentGeoLocation != null) {
                    this.getConstructedFormData()
                    // this.epidemicService.submitEpidemicQuestionnaire(this.getConstructedFormData()).subscribe((res: any) => {
                    // dialogs.alert({
                    //     title: "Results",
                    //     message: res,
                    //     okButtonText: "OK"
                    // });
                    // });
                }
            } else {
                dialogs.alert({
                    title: 'Required',
                    message: "Questionnaire not shared. Please note that location and results sharing is required to determine accuracy",
                    okButtonText: "OK"
                })
            }
        });
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
}
