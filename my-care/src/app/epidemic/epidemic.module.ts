import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptHttpClientModule, NativeScriptFormsModule, NativeScriptRouterModule } from '@nativescript/angular';
import { EpidemicOverviewPageComponent } from './pages/epidemic-overview-page/epidemic-overview-page.component';
import { SymptomsPageComponent } from './pages/symptoms-page/symptoms-page.component';
import { PrecautionsPageComponent } from './pages/precautions-page/precautions-page.component';
import { QuestionnairePageComponent } from './pages/questionnaire-page/questionnaire-page.component';
import { EpidemicPageComponent } from './pages/epidemic-page/epidemic-page.component';
import { QuestionnaireFormComponent } from './components/questionnaire-form/questionnaire-form.component';
import { EpidemicRoutingModule } from './epidemic-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NativeScriptUIDataFormModule } from 'nativescript-ui-dataform/angular';
import { PocketDocEpidemicService } from '~/lib/base/services/pocketdoc.service';
import { DeptEpidemicService } from '~/lib/base/services/gov.service';

@NgModule({
    declarations: [
        EpidemicOverviewPageComponent,
        SymptomsPageComponent,
        PrecautionsPageComponent,
        QuestionnairePageComponent,
        EpidemicPageComponent,
        QuestionnaireFormComponent
    ],
    imports: [
        NativeScriptCommonModule,
        EpidemicRoutingModule,
        NativeScriptHttpClientModule,
        ReactiveFormsModule,
        NativeScriptFormsModule,
        NativeScriptUIDataFormModule,
        NativeScriptRouterModule
    ],
    schemas: [
        NO_ERRORS_SCHEMA
<<<<<<< HEAD
=======
    ],
    providers: [
        PocketDocEpidemicService,
        DeptEpidemicService
>>>>>>> 27ab641bbedabe1c7de02135f739d0729826cfa6
    ]
})
export class EpidemicModule { }
