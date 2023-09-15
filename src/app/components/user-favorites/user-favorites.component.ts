import { Component, Input } from '@angular/core';
import { GithubService } from '../../services/github.service';

@Component({
  selector: 'app-user-favorites',
  templateUrl: './user-favorites.component.html',
  styleUrls: ['./user-favorites.component.css']
})
export class UserFavoritesComponent {
  favoriteUsers: any[] = [];

  constructor(private githubService: GithubService) {
    // Favori kullanıcılar burada aınır.
    this.favoriteUsers = this.githubService.getFavorites();
  }

  // Kullanıcıyı favorilerden çıkarma methodu
  removeFromFavorites(user: any) {
    this.githubService.removeFromFavorites(user);

    // Kullanıcının indexi bulunarak, bulunduğu indexin kaldırılması sağlanır
    const index = this.favoriteUsers.findIndex((favUser: any) => favUser.id === user.id);
    if (index !== -1) {
      this.favoriteUsers.splice(index, 1);
    }
  }
}
