import { UserService } from '../../services/user.service';
import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '@booking/data';

@Component({
  selector: 'booking-user-table-container',
  templateUrl: './user-table-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [UserService],
})
export class UserTableContainerComponent implements OnInit {

  users$: Observable<User[]>;

  constructor(
    private readonly userService: UserService,
  ) {
  }

  ngOnInit(): void {
    this.users$ = this.userService.getUsers();
  }
}

