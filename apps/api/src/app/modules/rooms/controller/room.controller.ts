import { Controller, Get } from '@nestjs/common';
import { RoomService } from '../service/room.service';
import { Observable } from 'rxjs';
import { RoomListItem } from '../../../models/room.interface';

@Controller('rooms')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  @Get()
  getData(): Observable<RoomListItem[]> {
    return this.roomService.getRooms();
  }
}
