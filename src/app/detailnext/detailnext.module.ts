import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailnextPageRoutingModule } from './detailnext-routing.module';

import { DetailnextPage } from './detailnext.page';

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SweetAlert2Module,
    DetailnextPageRoutingModule
  ],
  declarations: [DetailnextPage]
})
export class DetailnextPageModule {}
