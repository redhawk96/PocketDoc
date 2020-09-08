import { Component, OnInit } from '@angular/core';
import { AuthService } from '~/lib/base/services/auth.service';
import { UserService } from '~/lib/base/services/user.service';
import { LoginUser } from '~/lib/base/models/loginUser';
import { RouterExtensions } from '@nativescript/angular';
import { Progress } from '@nativescript/core/ui/progress';
import { Page } from '@nativescript/core/ui/page';

@Component({
    selector: 'app-loading-page',
    templateUrl: './loading-page.component.html',
    styleUrls: ['./loading-page.component.css']
})
export class LoadingPageComponent implements OnInit {

    isQuestionnaireLoaded: boolean = false;
    logo : string;

    constructor(private authService: AuthService, private userService: UserService, private router: RouterExtensions, private page: Page) {
        this.page.actionBarHidden = true;
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
