import { Component, OnInit } from '@angular/core';
import { EpidemicService } from '~/lib/base/services/epidemic.service';
import { EpidemicProfile } from '~/lib/base/models/EpidemicProfile';

@Component({
    selector: 'app-epidemic-page',
    templateUrl: './epidemic-page.component.html',
    styleUrls: ['./epidemic-page.component.css']
})
export class EpidemicPageComponent implements OnInit {

    private _epidemicProfile: EpidemicProfile;
    precautions = [];
    symptoms = [];
    precautionColumns: string = "";
    symptomColumns: string = "";

    constructor(private epidemicService: EpidemicService) {
        this.epidemicService.getEpidemicProfile().subscribe((eProfile: any) => {
            this._epidemicProfile = eProfile;
            this.precautions = this.epidemicProfile.precautions;
            this._epidemicProfile.precautions.forEach((precaution: any) => {
                this.precautionColumns += "auto ";
            })
            this.symptoms = this._epidemicProfile.symptoms;
            this._epidemicProfile.symptoms.forEach((symptom: any) => {
                this.symptomColumns += "auto ";
            })
        })
    }

    get epidemicProfile() {
        return this._epidemicProfile;
    }

    ngOnInit(): void {
    }

}
