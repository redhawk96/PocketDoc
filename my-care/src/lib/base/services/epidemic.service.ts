import { Injectable } from "@angular/core";
import { DepartmentEpidemicProfile } from "../models/DepartmentEpidemicProfile";
import { EpidemicProfile } from "../models/EpidemicProfile";

@Injectable()

export class EpidemicService {

    private deptEpidemicProfile: DepartmentEpidemicProfile;
    private pocketDocEpidemicProfile: EpidemicProfile;

    setDeptEpidemicProfile(profile: DepartmentEpidemicProfile) {
        this.deptEpidemicProfile = profile;
    }

    getDeptEpidemicProfile(): DepartmentEpidemicProfile {
        return this.deptEpidemicProfile;
    }

    setPocketDocEpidemicProfile(profile: EpidemicProfile) {
        this.pocketDocEpidemicProfile = profile;
    }

    getPocketDocEpidemicProfile(): EpidemicProfile {
        return this.pocketDocEpidemicProfile;
    }
}
