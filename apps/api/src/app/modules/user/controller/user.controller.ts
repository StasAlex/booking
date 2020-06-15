import { Controller, Get, Delete } from '@nestjs/common';
import { UserService } from '../service/user.service';


@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getData() {
    return this.userService.getUsers();
  }
}
