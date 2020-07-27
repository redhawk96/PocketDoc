import { QuestionGroup, QuestionInfoGroup } from "./QuestionGroup";

export interface Questionnaire extends QuestionnaireInfo {
    description?: string | null;
    questions: QuestionGroup[];
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