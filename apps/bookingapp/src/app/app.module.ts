import { MatToolbarModule } from "@angular/material/toolbar";
import { NgModule } from '@angular/core';
import { UsersModule } from './modules/users/users.module';
import { RoomsModule } from './modules/rooms/rooms.module';
import { AppComponent } from './components/app/app.component';



@NgModule({
  declarations: [],
  imports: [RoomsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
