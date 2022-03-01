import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'upload', pathMatch: 'full'},
  { path: 'upload', loadChildren: () => import('./upload-data/upload-data.module').then(m => m.UploadDataModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
