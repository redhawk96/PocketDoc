import { Component, OnInit } from '@angular/core';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { Application } from '@nativescript/core';
import { DeptEpidemicService } from '~/lib/base/services/gov.service';
import { DepartmentEpidemicProfile } from '~/lib/base/models/DepartmentEpidemicProfile';
import { extractEpidemicProfile } from '~/lib/base/utils/deptEpidemicUtils';
// tslint:disable no-empty

@Component({
    selector: 'app-satistics-overview-page',
    templateUrl: './satistics-overview-page.component.html',
    styleUrls: ['./satistics-overview-page.component.css']
})
export class SatisticsOverviewPageComponent implements OnInit {

    epidemicProfile : DepartmentEpidemicProfile;

    constructor(private deptEpidemicService: DeptEpidemicService) {
        this.deptEpidemicService.fetchEpidemicProfile().subscribe((eProfile : any) => {
            this.epidemicProfile = extractEpidemicProfile(eProfile.data);
        })
    }


    ngOnInit(): void {
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>Application.getRootView();
        sideDrawer.showDrawer();
    }
}
