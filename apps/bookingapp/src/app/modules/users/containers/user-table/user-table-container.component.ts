import { UserService } from '../../services/user.service';
import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from '@booking/data';
import { switchMapTo } from 'rxjs/operators';

@Component({
  selector: 'booking-user-table-container',
  templateUrl: './user-table-container.component.html',
  styleUrls: ['./user-table-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [UserService],
})
export class UserTableContainerComponent implements OnInit {
  users$: Observable<User[]>;
  reloadSubject: BehaviorSubject<void> = new BehaviorSubject(undefined);

  constructor(private readonly userService: UserService) {}

  ngOnInit(): void {
    this.users$ = this.reloadSubject
      .pipe(
        switchMapTo(this.userService.getUsers()),
      );

  }
  onDeleteUser(id: string): void {
    this.userService.delete(id)
      .subscribe(
        () => {
          this.reloadSubject.next();
        },
      );
  }
}

