import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailnextPage } from './detailnext.page';

const routes: Routes = [
  {
    path: '',
    component: DetailnextPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailnextPageRoutingModule {}
