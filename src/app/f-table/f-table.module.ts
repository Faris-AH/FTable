import { NgModule } from '@angular/core';

import { CdkTableModule } from '@angular/cdk/table';
import {HttpClientModule} from '@angular/common/http';
import { FTableComponent } from './f-table.component';

@NgModule({
  imports: [
    CdkTableModule,
    HttpClientModule
  ],
  exports: [FTableComponent],
  declarations: [FTableComponent],
  providers: [],
})
export class FTableModule { }
