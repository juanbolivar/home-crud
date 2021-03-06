import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8090/api/users';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
	
  constructor( private http: HttpClient ) {
    console.log("Servicio user funcionando");
  }

  getUsers(): Observable<User[]> {
    return this.http.get(this.baseUrl).pipe(
      map(data => data as User[])
    );
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/${id}`);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.baseUrl, user, {headers: this.httpHeaders});
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(this.baseUrl, user, {headers: this.httpHeaders});
  }

  deleteUser(id: number): Observable<User> {
    return this.http.delete<User>(`${this.baseUrl}/${id}`, {headers: this.httpHeaders});
  }
}