import { Observable } from "rxjs";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '@booking/data';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  readonly path = '/api/users';
  title = 'Users List';

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.path);
  }
  getTitle(): string {
    return this.title;
  }
  delete(id: string): Observable<User> {
    return this.httpClient.delete<User>(`${this.path}/${id}`);
  }
}
