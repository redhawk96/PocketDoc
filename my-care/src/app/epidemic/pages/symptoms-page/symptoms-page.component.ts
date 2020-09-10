import { Component, OnInit } from '@angular/core';
import { PocketDocEpidemicService } from '~/lib/base/services/pocketdoc.service';
import { RouterExtensions } from '@nativescript/angular';

@Component({
    selector: 'app-symptoms-page',
    templateUrl: './symptoms-page.component.html',
    styleUrls: ['./symptoms-page.component.css']
})
// tslint:disable: no-empty

export class SymptomsPageComponent implements OnInit {

    symptoms = [];

    constructor(private pocketDocEpidemicService: PocketDocEpidemicService, private router: RouterExtensions) {
        this.pocketDocEpidemicService.getEpidemicProfile().subscribe((eProfile: any) => {
            this.symptoms = eProfile.symptoms;
        })
    }

    ngOnInit(): void {
    }

    goBack() {
        this.router.navigate(['/epidemic'])
    }
}
