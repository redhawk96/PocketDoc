export interface Option extends OptionInfo {
    description? : string;
    weight: number;
}

export interface OptionInfo {
    id: string;
    option: string;
    result?: number;
}


