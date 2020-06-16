import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Rooms } from '@booking/data';

@Component({
  selector: 'booking-room-card',
  templateUrl: './room-card.component.html',
  styleUrls: ['./room-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomCardComponent implements OnInit {
  @Input() rooms: Rooms[];

  constructor() {}

  ngOnInit() {}
}
