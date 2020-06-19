import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { RoomListItem } from '../../../models/room.interface';
import { rooms } from '../../../mocks/room.data';

@Injectable()
export class RoomService {
  public getData() {
    return 'Welcome to api!';
  }

  public getRooms(): Observable<RoomListItem[]> {
    return of(rooms);
  }
}
