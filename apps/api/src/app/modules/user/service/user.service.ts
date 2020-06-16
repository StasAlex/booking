import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { users } from '../../../mocks/users.data';
import { UserListItem } from '../../../models/user.interface';

@Injectable()
export class UserService {
  public getData() {
    return 'Welcome to api!';
  }

  public getUsers(): Observable<UserListItem[]> {
    return of(users);
  }
}
