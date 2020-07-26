import { Option, OptionInfo } from "./Option";

export interface QuestionGroup extends QuestionInfoGroup {
    type: string;
    options: Option[];
    weight: number;
};

export interface QuestionInfoGroup {
    id: string;
    question: string;
    optionInfos?: OptionInfo[];
}

