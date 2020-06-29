import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Adult, Baby } from '../../interfaces/form.interface';
import * as moment from 'moment';

@Component({
  selector: 'booking-search-form',
  templateUrl: './searchForm.component.html',
  styleUrls: ['./searchForm.component.scss'],
})
export class SearchFormComponent implements OnInit {
  title = 'Book the apartments';
  button = new FormControl();
  date = new FormControl(new Date());
  serializedDate = new FormControl(new Date().toISOString());
  selectedAdults: string;
  selectedBabies: string;
  adults: Adult[] = [];
  babies: Baby[] = [];
  startDate = moment().format('dddd, Do MMMM YYYY');

  getAdults() {
    for (let i = 1; i < 10; i++) {
      this.adults.push({
        value: String(i),
        viewValue: String(i),
      });
    }
    return this.adults;
  }

  getBabies() {
    for (let i = 0; i < 10; i++) {
      this.babies.push({
        value: String(i),
        viewValue: String(i),
      });
    }
    return this.babies;
  }

  constructor() {}

  ngOnInit() {
    this.getAdults();
    this.getBabies();
  }
}
