import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserTableContainerComponent } from './modules/users/containers/user-table/user-table-container.component';
import { RoomCardContainerComponent } from './modules/rooms/containers/room-card/room-card-container.component';
// CLI imports router

const routes: Routes = [
  { path: '', redirectTo: '/rooms', pathMatch: 'full' },

  {
    path: 'users',
    component: UserTableContainerComponent,
  },
  {
    path: 'rooms',
    component: RoomCardContainerComponent,
  },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
