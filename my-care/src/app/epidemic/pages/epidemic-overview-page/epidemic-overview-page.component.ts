import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EpidemicService } from '~/lib/base/services/epidemic.service';
import { EpidemicProfile } from '~/lib/base/models/EpidemicProfile';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { Application } from '@nativescript/core';

@Component({
    selector: 'app-epidemic-overview-page',
    templateUrl: './epidemic-overview-page.component.html',
    styleUrls: ['./epidemic-overview-page.component.css']
})
export class EpidemicOverviewPageComponent implements OnInit {

    epidemicProfile: EpidemicProfile;
    questionOption: any = {};

    constructor(private epidemicService: EpidemicService) {
        this.epidemicService.getEpidemicProfile().subscribe((eProfile: EpidemicProfile) => {
            this.epidemicProfile = eProfile;
        })
    }

    ngOnInit(): void {
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>Application.getRootView();
        sideDrawer.showDrawer();
    }
}
