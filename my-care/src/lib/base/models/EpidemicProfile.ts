import { Symptom } from '../../../../../libs/src/src/lib/model/Symptom';
import { Precaution } from '../../../../../libs/src/src/lib/model/Precaution';
import { Contact } from '../../../../../libs/src/src/lib/model/Contact';
import { MinimalQuestionnaire } from './MinimalQuestionnaire';
// tslint:disable: array-type

export interface EpidemicProfile {
    id: string;
    name: string;
    description: string;
    symptoms?: Symptom[] | [];
    precautions?: Precaution[] | [];
    questionnaire: MinimalQuestionnaire;
    vaccine: 'Available' | 'Not Available' | 'Trials Conducted';
    emergencyContacts: Contact[];
}
