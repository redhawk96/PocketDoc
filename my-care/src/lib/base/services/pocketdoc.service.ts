import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Submission } from "../models/Submission";

@Injectable({
    providedIn: "root"
})

export class PocketDocEpidemicService {
    constructor(private http: HttpClient) {
    }

    getEpidemicProfile() {
        return this.http.get('https://us-central1-pocketdoc-a13a2.cloudfunctions.net/dbGetEpidemicInfo');
    }

    submitEpidemicQuestionnaire(submission: Submission) {
        return this.http.post("https://us-central1-pocketdoc-a13a2.cloudfunctions.net/P2I", submission)
    }
}
