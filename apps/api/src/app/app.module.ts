import { Module } from '@nestjs/common';
import { UsersModule } from './modules/user/user.module';
import { RoomModule } from './modules/rooms/room.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

@Module({
  imports: [
    UsersModule,
    RoomModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'booking.db',
      entities: [join(__dirname, '/../**/**.entity{.ts,.js}')],
      synchronize: true,
    }),
  ],

  controllers: [],
  providers: [],
})
export class AppModule {}
