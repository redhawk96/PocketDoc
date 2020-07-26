import { QuestionGroup, QuestionInfoGroup } from "./QuestionGroup";

export interface Questionnaire extends QuestionnaireInfo {
    name: string;
    description?: string | null;
    questionGroups: QuestionGroup[];
    createdOn: Date;
    updatedOn: Date;
}

export interface QuestionnaireInfo {
    id: string;
    questionInfoGroups?: QuestionInfoGroup[];
    submittedOn?: Date;
    geoLocation?: Geolocation;
    result?: number;
}  