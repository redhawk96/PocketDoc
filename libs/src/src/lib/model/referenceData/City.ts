import { RefData } from "./RefData";
import { StateInfo } from "./State";

export class City implements RefData {
    id: string;
    disabled: boolean;
    name: string;
    state: StateInfo;
}
