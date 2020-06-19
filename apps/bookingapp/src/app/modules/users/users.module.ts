
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppComponent } from '../../components/app/app.component';
import { UserTableContainerComponent } from './containers/user-table/user-table-container.component';
import { UserTableComponent } from './components/user-table/user-table/user-table.component';
import { UserService } from './services/user.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [AppComponent, UserTableContainerComponent, UserTableComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    BrowserAnimationsModule,
    MatTableModule,
    MatToolbarModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [UserService],
})
export class UsersModule {}
