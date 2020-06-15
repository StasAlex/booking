import { UserService } from './service/user.service';
import { Module } from '@nestjs/common';
import { UserController } from './controller/user.controller';

@Module({
  imports: [],
  controllers: [ UserController ],
  providers: [ UserService ],
})
export class UsersModule {}
