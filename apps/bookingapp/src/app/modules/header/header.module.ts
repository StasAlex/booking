import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './components/header/header.component';
import { HeaderContainerComponent } from './containers/header-container/header-container.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [HeaderComponent, HeaderContainerComponent],
  imports: [CommonModule, MatIconModule, MatToolbarModule, MatButtonModule, RouterModule],
  exports: [HeaderContainerComponent],
})
export class HeaderModule {}
