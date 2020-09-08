import { Injectable } from "@angular/core";
import { MinimalUser } from "../models/MinimalUser";
import { LoginUser } from "../models/loginUser";

@Injectable({
    providedIn: "root"
})

export class UserService {

    private _dbUser: MinimalUser;
    private _loginUser: LoginUser;

    setDbUser(user: MinimalUser) {
        this._dbUser = user;
    }

    getDbUser(): MinimalUser {
        return this._dbUser;
    }

    setSignUpUser(user: LoginUser) {
        this._loginUser = user;
    }

    getSignUpUser(): LoginUser {
        return this._loginUser;
    }
}
