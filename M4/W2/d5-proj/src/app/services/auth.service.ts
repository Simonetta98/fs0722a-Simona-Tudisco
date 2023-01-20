import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, tap } from 'rxjs';
import { SignupData } from '../interfaces/signup-data';
import { LoginData } from '../interfaces/login-data';
import { AuthResponse } from '../interfaces/auth-response';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  authSubj = new BehaviorSubject<null|AuthResponse>(null) //comunicazione service -->componenti
  authObs = this.authSubj.asObservable()
  loggedObs = this.authObs.pipe(map((res)=>{
    if(res) {return true}
    return false
  }))

  logged = false

  url = "http://localhost:3000/"

  constructor(private http:HttpClient, private router: Router) { }

  signup(data:SignupData){
    return this.http.post<AuthResponse>(this.url + "signup", data)
  }

  jwtHelper = new JwtHelperService();

  login(data:LoginData) {
    return this.http.post<AuthResponse>(this.url+"login", data).pipe(tap((data)=>{
      //salvare in storage -> autologin
      localStorage.setItem("auth", JSON.stringify(data))
        //se il token non è valido logout automatico
        const expirationDate = this.jwtHelper.getTokenExpirationDate(data.accessToken) as Date;
        this.autoLogout(expirationDate)
      //notificare i component
      this.authSubj.next(data)
    }))
  }

  autoLogoutTimer: any;

  autoLogout(expirationDate: Date) {
    //getTime da il valore della data in ms
    const expMs = expirationDate.getTime() - new Date().getTime();
    this.autoLogoutTimer = setTimeout(() => {
        this.logout();
    }, expMs);
}


  logout() {
    localStorage.removeItem("auth");
    this.authSubj.next(null); //null = non siamo più autenticati
    this.router.navigate(['/auth/login']);
    if (this.autoLogoutTimer) {
      clearTimeout(this.autoLogoutTimer);
  }
  }

  restoreUser() {
    const userJson = localStorage.getItem('user');
    if (!userJson) {
        return;
    }
    const user: AuthResponse = JSON.parse(userJson);
    if (this.jwtHelper.isTokenExpired(user.accessToken)) {
        return;
    }

    this.authSubj.next(user);
    // this.authSubject.next(this.jwtHelper.decodeToken().user);
    //imposta un autologout in base alla data di scadenza
    const expirationDate = this.jwtHelper.getTokenExpirationDate(user.accessToken) as Date;
    this.autoLogout(expirationDate);
}

}
