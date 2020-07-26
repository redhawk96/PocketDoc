export interface Option extends OptionInfo {
    weight: number;
}

export interface OptionInfo {
    id: string;
    title: string;
    result?: number;
}


