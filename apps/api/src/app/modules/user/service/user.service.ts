import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { users } from '../../../mocks/users.data';
import { UserListItem } from '../../../models/user.interface';
import { User } from '../user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async create(user: User): Promise<User> {
    return await this.userRepository.save(user);
  }

  async update(user: User): Promise<UpdateResult> {
    return await this.userRepository.update(user.id, user);
  }

  async delete(id: string): Promise<DeleteResult> {
    return await this.userRepository.delete(id);
  }

  public getData() {
    return 'Welcome to api!';
  }

  public getUsers(): Observable<UserListItem[]> {
    return of(users);
  }
  addUser(user: UserListItem) {
    users.push(user);
    return of(users);
  }
}
