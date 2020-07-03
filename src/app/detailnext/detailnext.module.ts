import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailnextPageRoutingModule } from './detailnext-routing.module';

import { DetailnextPage } from './detailnext.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailnextPageRoutingModule
  ],
  declarations: [DetailnextPage]
})
export class DetailnextPageModule {}
