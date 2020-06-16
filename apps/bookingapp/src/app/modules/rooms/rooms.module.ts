
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { NgModule } from '@angular/core'
import { RoomsService } from './services/rooms.service';
import { RoomCardContainerComponent } from './containers/room-card/room-card-container.component';
import { RoomCardComponent } from './components/room-card/room-card.component';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from '../../components/app/app.component';
import { MatToolbarModule } from '@angular/material/toolbar';




@NgModule({
  declarations: [AppComponent, RoomCardContainerComponent, RoomCardComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    MatToolbarModule,
  ],
  providers: [RoomsService],
})
export class RoomsModule {}
