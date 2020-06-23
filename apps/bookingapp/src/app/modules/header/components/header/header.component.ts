import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'booking-header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  title = 'Booking';
  ngOnInit() {}
}
