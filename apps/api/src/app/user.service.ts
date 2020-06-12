import { Injectable } from '@nestjs/common';
import { User } from '@booking/data';

@Injectable()
export class UserService {
  users: User[] = [
    {
      id: '1',
      name: 'Stas',
      email: 'stas.alex28@gmail.com',
      password: 'stas1980',
      isAdmin: true,
    },
    {
      id: '2',
      name: 'Alex',
      email: 'alex.stas28@gmail.com',
      password: 'alex1980',
      isAdmin: false,
    },
    {
      id: '3',
      name: 'Tom',
      email: 'tom@gmail.com',
      password: 'tom1980',
      isAdmin: false,
    },
    {
      id: '4',
      name: 'Ron',
      email: 'ron@gmail.com',
      password: 'ron',
      isAdmin: false,
    },
    {
      id: '5',
      name: 'Alice',
      email: 'alice@gmail.com',
      password: 'alice',
      isAdmin: false,
    },
  ];

  getData(){
    return 'Welcome to api!';
  }

  getUsers(): User[] {
    return this.users;
  }
}
