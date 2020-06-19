import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { User } from '@booking/data';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'booking-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserTableComponent implements OnInit {
  @Input() users: User[];
  displayedColumns: string[] = [
    'id',
    'name',
    'email',
    'password',
    'isAdmin',
    'edit',
    'delete'
  ];
  title: string;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.title = this.userService.getTitle();
  }
}
