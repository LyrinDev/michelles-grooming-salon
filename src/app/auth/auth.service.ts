import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";
import { tap } from "rxjs/operators";
import { User } from "../models/user.model";

export interface ResponseData {
    kind: string;
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered?: boolean;
}

@Injectable({providedIn: 'root'})
export class AuthService{
    user = new BehaviorSubject<any>(null);

    constructor(private http: HttpClient, private router: Router) {}

    login(email :string, password: string){
        return this.http.post<ResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAF4bzITOAbsRF1DwXPL6qJ36nyt1s3nus', 
        {
            email: email,
            password: password,
            returnSecureToken: true
        }).pipe(tap(responseData =>{
            this.auth(
                responseData.email,
                responseData.localId,
                responseData.idToken,
                +responseData.expiresIn
            );
        })
        );
    }

    signup(email: string, password: string){
        return this.http.post<ResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAF4bzITOAbsRF1DwXPL6qJ36nyt1s3nus',
        {
            email: email,
            password: password,
            returnSecureToken: true
        }).pipe(tap(responseData =>{
            this.auth(
                responseData.email,
                responseData.localId,
                responseData.idToken,
                +responseData.expiresIn
            );
        })
        );
    }

    auth(                
        email: string,
        userId: string,
        token: string,
        expiresIn: number){
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(email, userId, token, expirationDate);
    this.user.next(user);
    // this.autoLogout(expiresIn * 1000);
    localStorage.setItem('userData', JSON.stringify(user));
    }
}
