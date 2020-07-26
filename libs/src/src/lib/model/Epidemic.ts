import { Symptom } from "./Symptom";
import { Precaution } from "./Precaution";
import { Address } from "./Address";
import { Questionnaire } from "./Questionnaire";
import { MedicalCenterInfo } from "./MedicalCenter";
import { Contact } from "./Contact";

export interface Epidemic {
    id: string;
    name: string;
    description: string;
    disabled?: boolean | false;
    symptoms?: Symptom[] | [];
    precautions?: Precaution[] | [];
    questionnaire: Questionnaire;
    hotZones?: Address[] | [];
    totalCases?: number;
    confirmedCases?: number;
    vaccine: 'Available' | 'Not Available' | 'Trials Conducted';
    operationalCenters: MedicalCenterInfo[];
    emergencyContacts: Contact[];
    createdOn: Date;
    updatedOn: Date;
}
