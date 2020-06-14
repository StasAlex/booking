import { Component, OnInit, Input } from '@angular/core';
import { User } from '@booking/data';

@Component({
  selector: 'booking-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {

  @Input() users: User[];
  displayedColumns: string[] = [
    'id',
    'name',
    'email',
    'password',
    'isAdmin',
    'actionsColumn',
  ];

  constructor() { }

  ngOnInit() {
  }

}
