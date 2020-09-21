import { Component, OnInit } from '@angular/core';
import { PocketDocEpidemicService } from '~/lib/base/services/pocketdoc.service';
import { RouterExtensions } from '@nativescript/angular';
// tslint:disable: no-empty

@Component({
    selector: 'app-precautions-page',
    templateUrl: './precautions-page.component.html',
    styleUrls: ['./precautions-page.component.css']
})
export class PrecautionsPageComponent implements OnInit {

    precautions = [];

    constructor(private pocketDocEpidemicService: PocketDocEpidemicService, private router: RouterExtensions) {
        this.pocketDocEpidemicService.getEpidemicProfile().subscribe((eProfile: any) => {
            this.precautions = eProfile.precautions;
        })
    }

    ngOnInit(): void {
    }

    goBack() {
        this.router.navigate(['/epidemic'])
    }

}
