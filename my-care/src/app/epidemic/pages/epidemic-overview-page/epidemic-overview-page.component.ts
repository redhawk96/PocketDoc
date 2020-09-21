import { Component, OnInit } from '@angular/core';
import { EpidemicService } from '~/lib/base/services/epidemic.service';
import { EpidemicProfile } from '~/lib/base/models/EpidemicProfile';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { Application } from '@nativescript/core';
// tslint:disable: no-empty
@Component({
    selector: 'app-epidemic-overview-page',
    templateUrl: './epidemic-overview-page.component.html',
    styleUrls: ['./epidemic-overview-page.component.css']
})
export class EpidemicOverviewPageComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>Application.getRootView();
        sideDrawer.showDrawer();
    }
}
