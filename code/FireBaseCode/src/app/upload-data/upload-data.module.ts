import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadDataRoutingModule } from './upload-data-routing.module';
import { UploadHomeComponent } from './upload-home/upload-home.component';
import { MaterialImportsModule } from '../_common/material-imports/material-imports.module';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';


@NgModule({
  declarations: [
    UploadHomeComponent
  ],
  imports: [
    CommonModule,
    UploadDataRoutingModule,
    MaterialImportsModule,
    provideFirestore(() => getFirestore()),
    
  ]
})
export class UploadDataModule { }
