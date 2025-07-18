import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';
import { BuildUploadComponent } from './components/build-upload/build-upload.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'player/:id', component: PlayerDetailComponent },
  { path: 'upload', component: BuildUploadComponent }
];