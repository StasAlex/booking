import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '@booking/data';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}


}
