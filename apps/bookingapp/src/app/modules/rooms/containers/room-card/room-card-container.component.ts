import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Rooms } from '@booking/data';
import { RoomsService } from '../../services/rooms.service';

@Component({
  selector: 'booking-room-card-container',
  templateUrl: './room-card-container.component.html',
  styleUrls: ['./room-card-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [RoomsService],
})
export class UserTableContainerComponent implements OnInit {
  rooms$: Observable<Rooms[]>;

  constructor(private readonly roomsService: RoomsService) {}

  ngOnInit(): void {
    this.rooms$ = this.roomsService.getRooms();
  }
}

