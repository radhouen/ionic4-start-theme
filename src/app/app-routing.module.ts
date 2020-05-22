import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'about', loadChildren: './pages/about/about.module#AboutPageModule' },
  { path: 'settings', loadChildren: './pages/settings/settings.module#SettingsPageModule' },
  { path: 'edit-profile', loadChildren: './pages/edit-profile/edit-profile.module#EditProfilePageModule' },
  { path: 'home-results', loadChildren: './pages/home-results/home-results.module#HomeResultsPageModule' },
  { path: 'essence', loadChildren: './pages/essence/essence.module#EssencePageModule' },
  { path: 'diesel', loadChildren: './pages/diesel/diesel.module#DieselPageModule' },
  { path: 'marins', loadChildren: './pages/marins/marins.module#MarinsPageModule' },
  { path: 'httemps', loadChildren: './pages/httemps/httemps.module#HttempsPageModule' },
  { path: 'hmgaz', loadChildren: './pages/hmgaz/hmgaz.module#HmgazPageModule' },
  { path: 'htransmissions', loadChildren: './pages/htransmissions/htransmissions.module#HtransmissionsPageModule' },
  { path: 'caloporteurs', loadChildren: './pages/caloporteurs/caloporteurs.module#CaloporteursPageModule' },
  { path: 'hydrauliques', loadChildren: './pages/hydrauliques/hydrauliques.module#HydrauliquesPageModule' },
  { path: 'graisses', loadChildren: './pages/graisses/graisses.module#GraissesPageModule' },
  { path: 'viewdata', loadChildren: './pages/viewdata/viewdata.module#ViewdataPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
