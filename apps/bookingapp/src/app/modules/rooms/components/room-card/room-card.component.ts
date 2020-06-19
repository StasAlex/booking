import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Rooms } from '@booking/data';
import { RoomsService } from '../../services/rooms.service';

@Component({
  selector: 'booking-room-card',
  templateUrl: './room-card.component.html',
  styleUrls: ['./room-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomCardComponent implements OnInit {
  @Input() rooms: Rooms[];

  title: string;

  constructor(private roomService: RoomsService) {}

  ngOnInit() {
    this.title = this.roomService.getTitle();
  }
}
