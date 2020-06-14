import { NgModule } from '@angular/core';
import { UsersModule } from './modules/users/users.module';
import { AppComponent } from './components/app/app.component';


@NgModule({
  declarations: [],
  imports: [UsersModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
