import { Observable } from "rxjs";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Rooms } from '@booking/data';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  constructor(private httpClient: HttpClient) {}

  title = 'Apartment List';

  getRooms(): Observable<Rooms[]> {
    return this.httpClient.get<Rooms[]>('/api/rooms');
  }
  getTitle(): string {
    return this.title;
  }
}
