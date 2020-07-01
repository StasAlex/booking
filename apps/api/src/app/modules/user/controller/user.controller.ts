import { Controller, Get, Delete, Post, Body, Put, Param } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { UserListItem } from '../../../models/user.interface';
import { User } from '../user.entity';


@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  index(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Post('create')
  async create(@Body() userData: Omit<User, 'id'>): Promise<User> {
    return this.userService.create(userData);
  }

  @Put(':id')
  async update(@Param('id') id, @Body() userData: User): Promise<any> {
    userData.id = Number(id);
    console.log('Update #' + userData.id);
    return this.userService.update(userData);
  }

  @Delete(':id')
  async delete(@Param('id') id): Promise<any> {
    return this.userService.delete(id);
  }
}
