
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppComponent } from '../../components/app/app.component';
import { RoomsService } from './services/rooms.service';
import { RoomCardContainerComponent } from './containers/room-card/room-card-container.component';
import { RoomCardComponent } from './components/room-card/room-card.component';




@NgModule({
  declarations: [AppComponent, RoomCardContainerComponent, RoomCardComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    BrowserAnimationsModule,
    MatTableModule,
    MatToolbarModule,
    HttpClientModule,
  ],
  providers: [RoomsService],
})
export class RoomsModule {}
