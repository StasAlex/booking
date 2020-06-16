import { NgModule } from '@angular/core';
import { UsersModule } from './modules/users/users.module';
import { AppComponent } from './components/app/app.component';
import { RoomsModule } from './modules/rooms/rooms.module';


@NgModule({
  declarations: [],
  imports: [UsersModule, RoomsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
