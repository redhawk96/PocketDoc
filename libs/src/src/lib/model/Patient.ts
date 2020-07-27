import { UserInfo } from "./User";
import { QuestionnaireInfo } from "./Questionnaire";
import { MedicalCenterInfo } from "./MedicalCenter";

export interface Patient extends UserInfo {
    submissions: QuestionnaireInfo[];
    latestResult: number;
    isCritical: boolean | false;
    isProximityCritial : boolean | false;
    lastLocation: Geolocation;
    admitted?: boolean | false;
    admittedOn?: Date | null;
    admittedCenter?: MedicalCenterInfo | null;
}