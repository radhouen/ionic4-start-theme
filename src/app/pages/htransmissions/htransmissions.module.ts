import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HtransmissionsPage } from './htransmissions.page';

const routes: Routes = [
  {
    path: '',
    component: HtransmissionsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HtransmissionsPage]
})
export class HtransmissionsPageModule {}
