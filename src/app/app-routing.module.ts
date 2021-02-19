import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule) },
  { path: 'register', loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterPageModule) },
  { path: 'about', loadChildren: () => import('./pages/about/about.module').then(m => m.AboutPageModule) },
  { path: 'settings', loadChildren: () => import('./pages/settings/settings.module').then(m => m.SettingsPageModule) },
  { path: 'edit-profile', loadChildren: () => import('./pages/edit-profile/edit-profile.module').then(m => m.EditProfilePageModule) },
  { path: 'home-results', loadChildren: () => import('./pages/home-results/home-results.module').then(m => m.HomeResultsPageModule) },
  { path: 'essence', loadChildren: () => import('./pages/essence/essence.module').then(m => m.EssencePageModule) },
  { path: 'diesel', loadChildren: () => import('./pages/diesel/diesel.module').then(m => m.DieselPageModule) },
  { path: 'marins', loadChildren: () => import('./pages/marins/marins.module').then(m => m.MarinsPageModule) },
  { path: 'httemps', loadChildren: () => import('./pages/httemps/httemps.module').then(m => m.HttempsPageModule) },
  { path: 'hmgaz', loadChildren: () => import('./pages/hmgaz/hmgaz.module').then(m => m.HmgazPageModule) },
  { path: 'htransmissions', loadChildren: () => import('./pages/htransmissions/htransmissions.module').then(m => m.HtransmissionsPageModule) },
  { path: 'caloporteurs', loadChildren: () => import('./pages/caloporteurs/caloporteurs.module').then(m => m.CaloporteursPageModule) },
  { path: 'hydrauliques', loadChildren: () => import('./pages/hydrauliques/hydrauliques.module').then(m => m.HydrauliquesPageModule) },
  { path: 'graisses', loadChildren: () => import('./pages/graisses/graisses.module').then(m => m.GraissesPageModule) },
  { path: 'viewdata', loadChildren: () => import('./pages/viewdata/viewdata.module').then(m => m.ViewdataPageModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
