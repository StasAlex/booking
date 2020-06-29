import { RoomService } from './service/room.service';
import { Module } from '@nestjs/common';
import { RoomController } from './controller/room.controller';
import { Room } from './room.entity';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [TypeOrmModule.forFeature([Room])],
  controllers: [RoomController],
  providers: [RoomService],
})
export class RoomModule {}
