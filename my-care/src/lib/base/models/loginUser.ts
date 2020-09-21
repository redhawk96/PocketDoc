
export class LoginUser {
    email: string;
    password: string;
    uid?: string;

    constructor(email: string, password: string, uid?: string) {
        this.email = email;
        this.password = password;
        this.uid = uid;
    }
}
