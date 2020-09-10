import { Component, OnInit } from '@angular/core';
import { AuthService } from '~/lib/base/services/auth.service';
import { UserService } from '~/lib/base/services/user.service';
import { LoginUser } from '~/lib/base/models/loginUser';
import { RouterExtensions } from '@nativescript/angular';
import { Progress } from '@nativescript/core/ui/progress';
import { Page } from '@nativescript/core/ui/page';
import { DeptEpidemicService } from '~/lib/base/services/gov.service';
import { extractEpidemicProfile } from '~/lib/base/utils/deptEpidemicUtils';
import { PocketDocEpidemicService } from '~/lib/base/services/pocketdoc.service';
import { EpidemicService } from '~/lib/base/services/epidemic.service';
// tslint:disable: no-empty
// tslint:disable: align

@Component({
    selector: 'app-loading-page',
    templateUrl: './loading-page.component.html',
    styleUrls: ['./loading-page.component.css']
})
export class LoadingPageComponent implements OnInit {

    isQuestionnaireLoaded: boolean = false;
    logo: string;

    constructor(private authService: AuthService, private userService: UserService, private router: RouterExtensions, private page: Page, private deptEpidemicService: DeptEpidemicService,
        private pocketDocEpidemicService: PocketDocEpidemicService, private epidemicService: EpidemicService) {
        this.page.actionBarHidden = true;
        this.deptEpidemicService.fetchEpidemicProfile().subscribe((eProfile: any) => {
            this.epidemicService.setDeptEpidemicProfile(extractEpidemicProfile(eProfile.data));
        });
        // this.pocketDocEpidemicService.getEpidemicProfile().subscribe((eProfile: any) => {
        //     this.epidemicService.setPocketDocEpidemicProfile(eProfile);
        // })
        console.log(this.epidemicService.getDeptEpidemicProfile())
    }

    ngOnInit(): void {
    }

    onProgressBarLoaded(args) {
        const progressBar = args.object as Progress;
        progressBar.value = 50; // Initial value
        progressBar.maxValue = 100; // Maximum value
        setInterval(() => {
            progressBar.value += 5;
        }, 100);
    }

    onValueChanged(args) {
        if (args.value === 100) {
            if (this.userService.getDbUser()) {
                this.authService.getDbUser(new LoginUser(this.userService.getDbUser().email, null)).subscribe((res: any) => {
                    this.router.navigate(['/epidemic']);
                })
            } else {
                this.router.navigate(['/auth']);
            }
        }
    }

}
