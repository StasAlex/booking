import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'booking-search-form',
  templateUrl: './searchForm.component.html',
  styleUrls: ['./searchForm.component.scss'],
})
export class SearchFormComponent implements OnInit {

  date = new FormControl(new Date());
  serializedDate = new FormControl(new Date().toISOString());

  constructor() {}

  ngOnInit() {}
}
