import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/users';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  
  baseUrl = environment.apiUrl;
  
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
      return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    return this.http.post<any>(`api/auth`, { username, password })
        .pipe(map(user => {
            if (user && user.token) {
                // store user details in local storage to keep user logged in
                localStorage.setItem('currentUser', JSON.stringify(user.result));
                this.currentUserSubject.next(user);
            }

            return user;
        }));
}

logout() {
    // remove user data from local storage for log out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
}

  // getUserDetails() {
  //   return localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')) : null;
  // }

  // setDataInLocalStorage(variableName, data) {
  //   localStorage.setItem(variableName, data);
  // }

  // getToken() {
  //   return localStorage.getItem('token');
  // }

  // clearStorage() {
  //   localStorage.clear();
  // }

}
