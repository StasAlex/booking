import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '@booking/data';



@Component({
  selector: 'booking-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss'],
})
export class UserTableComponent implements OnInit {
  users: User[];

  constructor(private http: HttpClient,
    ) {}

  displayedColumns: string[] = [
    'id',
    'name',
    'email',
    'password',
    'isAdmin',
    'actionsColumn',
  ];

  getUsers(): void {
    this.http
      .get<User[]>('/api')
      .subscribe((users) => (this.users = users));

  }

  ngOnInit(): void {
    this.getUsers();
  }

  removeUser(id: string): void{}


}
