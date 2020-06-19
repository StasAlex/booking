import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFormContainerComponent } from './containers/searchFormContainer/searchFormContainer.component';
import { SearchFormComponent } from './components/searchForm/searchForm.component';
import { HomeContainerComponent } from './containers/homeContainer/homeContainer.component';
import { HomeComponent } from './components/home/home.component';



@NgModule({
  declarations: [
    SearchFormContainerComponent,
    SearchFormComponent,
    HomeContainerComponent,
    HomeComponent,
  ],
  imports: [CommonModule],
})
export class HomeModule {}
