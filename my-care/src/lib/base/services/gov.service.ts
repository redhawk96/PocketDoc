import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})

export class DeptEpidemicService {

    constructor(private http: HttpClient) { }

    fetchEpidemicProfile() {
        return this.http.get('https://www.hpb.health.gov.lk/api/get-current-statistical');
    }
}
