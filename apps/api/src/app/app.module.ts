import { Module } from '@nestjs/common';
import { UsersModule } from './modules/user/user.module';
import { RoomModule } from './modules/rooms/room.module';

@Module({
  imports: [UsersModule, RoomModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
