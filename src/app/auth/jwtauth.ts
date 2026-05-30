import { Injectable } from '@angular/core';
import { User } from '../userES/user';

@Injectable({
    providedIn: 'root'
})

export class jwtauth {

    constructor() { }

    public setRole(role: string) {
        localStorage.setItem("role", role);
    }

    public getRole(): any {
        return localStorage.getItem("role");
    }

    public setToken(jwtToken: string) {
        localStorage.setItem("jwtToken", jwtToken);
    }

    public getToken(): any {
        return localStorage.getItem("jwtToken");
    }

    public clear() {
        localStorage.clear();
    }

    public isLoggedIn() {
        return this.getRole() && this.getToken();
    }

    public getname(): any {
        return localStorage.getItem("lastname");
    }

    // public setUserData(user: User) {
    //     localStorage.setItem('userData', JSON.stringify(user));
    //   }
      
    //   public getUserData(): User | null {
    //     const userData = localStorage.getItem('userData');
    //     return userData ? JSON.parse(userData) : null;
    //   }
      

}
