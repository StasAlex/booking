import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
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
  @Output() deleteUserEvent: EventEmitter<string> = new EventEmitter();
  displayedColumns: string[] = [

    'name',
    'email',
    'password',
    'isAdmin',
    'edit',
    'delete',
  ];
  title: string;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.title = this.userService.getTitle();
  }

  onDeleteUser({ name, id }: User): void {
    if (confirm(`Do you really want to delete user "${name}"?`)) {
    this.deleteUserEvent.emit(id);
  }
}
}
