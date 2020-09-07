import { Injectable } from "@angular/core";
import { MinimalUser } from "../models/MinimalUser";

@Injectable({
    providedIn: "root"
})

export class UserService {

    private _dbUser: MinimalUser;

    setDbUser(user: MinimalUser) {
        this._dbUser = user;
    }

    getDbUser(): MinimalUser {
        return this._dbUser;
    }

}
