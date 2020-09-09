import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptHttpClientModule, NativeScriptFormsModule, NativeScriptRouterModule } from '@nativescript/angular';
import { EpidemicOverviewPageComponent } from './pages/epidemic-overview-page/epidemic-overview-page.component';
import { SymptomsPageComponent } from './pages/symptoms-page/symptoms-page.component';
import { PrecautionsPageComponent } from './pages/precautions-page/precautions-page.component';
import { QuestionnairePageComponent } from './pages/questionnaire-page/questionnaire-page.component';
import { EpidemicPageComponent } from './pages/epidemic-page/epidemic-page.component';
import { EpidemicInfoCardComponent } from './components/epidemic-info-card/epidemic-info-card.component';
import { SymptomListComponent } from './components/symptom-list/symptom-list.component';
import { SymptomCardComponent } from './components/symptom-card/symptom-card.component';
import { PrecautionListComponent } from './components/precaution-list/precaution-list.component';
import { PrecautionCardComponent } from './components/precaution-card/precaution-card.component';
import { QuestionnaireFormComponent } from './components/questionnaire-form/questionnaire-form.component';
import { FormItemComponent } from './components/form-item/form-item.component';
import { QuestionnaireResultsModalComponent } from './components/questionnaire-results-modal/questionnaire-results-modal.component';
import { EpidemicRoutingModule } from './epidemic-routing.module';
import { EpidemicService } from '../../lib/base/services/epidemic.service';
import { ReactiveFormsModule } from '@angular/forms';
import { NativeScriptUIDataFormModule } from 'nativescript-ui-dataform/angular';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '~/lib/base/services/user.service';

@NgModule({
    declarations: [
        EpidemicOverviewPageComponent,
        SymptomsPageComponent,
        PrecautionsPageComponent,
        QuestionnairePageComponent,
        EpidemicPageComponent,
        EpidemicInfoCardComponent,
        SymptomListComponent,
        SymptomCardComponent,
        PrecautionListComponent,
        PrecautionCardComponent,
        QuestionnaireFormComponent,
        FormItemComponent,
        QuestionnaireResultsModalComponent
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
    ],
    providers : [
        EpidemicService
    ]
})
export class EpidemicModule { }
