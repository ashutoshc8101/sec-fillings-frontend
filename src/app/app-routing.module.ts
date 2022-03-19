import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyPage } from './company-page/company-page.component';
import { ComparePageComponent } from './compare/compare-page.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { ProfilePageComponent } from './profile/profile-page.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: 'search', component: SearchComponent },
  { path: 'company/:cik', component: CompanyPage },
  { path: 'profile', pathMatch: 'full', component: ProfilePageComponent },
  { path: 'favourites', pathMatch: 'full', component: FavouritesComponent },
  { path: 'compare/:cik1/:cik2', component: ComparePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
