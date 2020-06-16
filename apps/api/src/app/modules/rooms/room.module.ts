import { RoomService } from './service/room.service';
import { Module } from '@nestjs/common';
import { RoomController } from './controller/room.controller';

@Module({
  imports: [],
  controllers: [ RoomController ],
  providers: [ RoomService ],
})
export class RoomModule {}
