import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserSearchComponent } from './components/user-search/user-search.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserFavoritesComponent } from './components/user-favorites/user-favorites.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // Ana sayfa
  { path: 'search', component: UserSearchComponent }, // Kullanıcı arama sayfası
  { path: 'users', component: UserListComponent }, // Kullanıcı listeleme sayfası
  { path: 'favorites', component: UserFavoritesComponent }, // Favori kullanıcılar sayfası
  { path: 'user/:id', component: UserProfileComponent }, // Kullanıcı profil sayfası
  { path: 'dashboard', component: DashboardComponent }, // Kullanıcı profil sayfası
  { path: '**', redirectTo: '/deashboard' } // Geçersiz URL'leri ana sayfaya yönlendir
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }