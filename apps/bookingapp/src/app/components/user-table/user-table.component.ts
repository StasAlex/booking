import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { HttpClient } from '@angular/common/http';
import { User } from '@booking/data';



@Component({
  selector: 'booking-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss'],
})
export class UserTableComponent implements OnInit {
  users: User[] = [];

  constructor(private http: HttpClient,
               private userService: UserService) {}

  displayedColumns = ['id', 'name', 'email', 'password', 'isAdmin'];

  getUsers() {
    this.http.get<User[]>('/api').subscribe((users) => (this.users = users));
  }

  ngOnInit(): void {
    this.getUsers();
  }
}
