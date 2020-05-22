import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HydrauliquesPage } from './hydrauliques.page';

const routes: Routes = [
  {
    path: '',
    component: HydrauliquesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HydrauliquesPage]
})
export class HydrauliquesPageModule {}
