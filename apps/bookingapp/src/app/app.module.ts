
import { NgModule } from '@angular/core';
import { UsersModule } from './modules/users/users.module';
import { RoomsModule } from './modules/rooms/rooms.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './modules/home/home.module';
import { HeaderModule } from './modules/header/header.module';




@NgModule({
  declarations: [AppComponent],
  imports: [
    UsersModule,
    RoomsModule,
    HomeModule,
    HeaderModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeaderModule,
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
