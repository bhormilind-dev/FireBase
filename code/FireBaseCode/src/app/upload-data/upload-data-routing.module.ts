import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadHomeComponent } from './upload-home/upload-home.component';

const routes: Routes = [
  {path: '', component: UploadHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UploadDataRoutingModule { }
