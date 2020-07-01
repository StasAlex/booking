import { Module } from '@nestjs/common';
import { UsersModule } from './modules/user/user.module';
import { RoomModule } from './modules/rooms/room.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './modules/user/user.entity';
import { Room } from './modules/rooms/room.entity';
@Module({
  imports: [
    UsersModule,
    RoomModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'booking.db',
      // entities: [(()=>{ console.log(__dirname); return __dirname; })() + '/src/app/modules/**/**.entity{.ts,.js}'],
      entities: [User, Room],
      synchronize: true,
    }),
  ],

  controllers: [],
  providers: [],
})
export class AppModule {}
