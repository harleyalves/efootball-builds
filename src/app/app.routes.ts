import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BuildUploadComponent } from './components/build-upload/build-upload.component';
import { BuildDetailComponent } from './components/build-detail/build-detail.component';
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'build/:id', component: BuildDetailComponent },
  { path: 'upload', component: BuildUploadComponent }
];