import { Component, Input, Output, EventEmitter } from '@angular/core';
import { GithubService } from '../../services/github.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  @Input() userList: any[] = [];
  @Output() addToFavorites = new EventEmitter<any>();
  @Output() removeFromFavorites = new EventEmitter<any>();
  favoriteUsers: any[] = [];
  // @Output() getFavoriteUsers = new EventEmitter<{ favoriteList: any[] }>();


  constructor(private githubService: GithubService) {
    // Favori kullanıcıları burada alabilirsiniz ve favoriteUsers'e atayabilirsiniz.
    this.favoriteUsers = this.githubService.getFavorites();
  }

  addUserToFavorites(user: any) {
    this.addToFavorites.emit(user);
  }

  removeUserFromFavorites(user: any) {
    this.removeFromFavorites.emit(user);
  }
}
