// tslint:disable: quotemark
// tslint:disable: ban-types
import { Symptom } from "./Symptom";
import { Precaution } from "./Precaution";
import { Questionnaire } from "./Questionnaire";

export interface Epidemic {
  id: string;
  name: string;
  photoURL: string;
  description: string;
  disabled?: boolean | false;
  symptoms?: Symptom[] | [];
  precautions?: Precaution[] | [];
  questionnaire: Questionnaire;
  // hotZones?: Address[] | [];
  hotZones?: Object | {};
  totalCases?: number;
  confirmedCases?: number;
  vaccine: 'Available' | 'Not Available' | 'Trials Conducted';
  // operationalCenters: MedicalCenterInfo[];
  // emergencyContacts: Contact[];
  createdOn: Date;
  updatedOn: Date;
}
