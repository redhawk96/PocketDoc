import { Component, OnInit } from '@angular/core';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { Application } from '@nativescript/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-profile-page',
    templateUrl: './profile-page.component.html',
    styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>Application.getRootView();
        sideDrawer.showDrawer();
    }
}
