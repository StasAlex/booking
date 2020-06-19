import { Observable } from "rxjs";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '@booking/data';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  title = 'Users List';

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>('/api/users');
  }
  getTitle(): string {
    return this.title;
  }
}
