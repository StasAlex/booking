import {
  Component,
  OnInit,
  ChangeDetectionStrategy
} from '@angular/core';
import {
  User
} from '@booking/data';
import {
  Observable
} from 'rxjs';
import {
  UserService
} from '../../services/user.service';

@Component({
  selector: 'booking-user-table-container',
  templateUrl: './user-table-container.component.html',
  styleUrls: ['./user-table-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [UserService],
})

export class UserTableContainerComponent implements OnInit {

  users$: Observable <User[]>;

  displayedColumns: string[] = [
    'id',
    'name',
    'email',
    'password',
    'isAdmin',
    'actionsColumn',
  ];

  constructor(
    private readonly userService: UserService,

  ) {

  }

  ngOnInit(): void {
    this.users$ = this.userService.getUsers();
  }


  getUsers(): void {
    this.userService.getUsers()
      .subscribe();

  }

}
