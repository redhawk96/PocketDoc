import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { LoginUser } from "../models/loginUser";
import { API_KEY } from "../keys/firebase-config";
import { MinimalUser } from "../models/MinimalUser";

@Injectable({
    providedIn: "root"
})

export class AuthService {
    constructor(private http: HttpClient) {
    }

    signIn(user: LoginUser) {
        return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
            { email: user.email, password: user.password, returnSecureToken: true })
    }

    signUp(user: LoginUser) {
        return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
            { email: user.email, password: user.password, returnSecureToken: true })
    }

    setUpProfile(user: MinimalUser) {
        return this.http.post('https://us-central1-pocketdoc-a13a2.cloudfunctions.net/dbCreateUser', user);
    }

    getDbUser(user: LoginUser) {
        return this.http.post('https://us-central1-pocketdoc-a13a2.cloudfunctions.net/dbGetMinimalUserInfo', user);
    }

    // getItem(id: number): Item {
    //     return this.items.filter((item) => item.id === id)[0];
    // }
}
