import { RefData } from "./RefData";
import { StateInfo } from "./State";

export class City implements RefData {
    id: string;
    active: string;
    name: string;
    state: StateInfo;
}
