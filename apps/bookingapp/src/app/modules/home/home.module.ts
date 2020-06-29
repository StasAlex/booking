import { MatIconModule } from "@angular/material/icon";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFormContainerComponent } from './containers/searchFormContainer/searchFormContainer.component';
import { SearchFormComponent } from './components/searchForm/searchForm.component';
import { HomeContainerComponent } from './containers/homeContainer/homeContainer.component';
import { HomeComponent } from './components/home/home.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';




@NgModule({
  declarations: [
    SearchFormContainerComponent,
    SearchFormComponent,
    HomeContainerComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatSelectModule
  ],
})
export class HomeModule {}
