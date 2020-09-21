import {RefData} from "./RefData";

export class Language implements RefData {
  id: string;
  name: string;
  shortName: string;
  disabled: boolean;
}
