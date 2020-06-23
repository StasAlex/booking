import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'booking-header-container',
  templateUrl: './header-container.component.html',
  styleUrls: ['./header-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
