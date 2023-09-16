import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  searchQuery: string = '';
  userListData: any[] = [];
  favoriteUsers: any[] = this.githubService.getFavorites();

  showFavorites: boolean = true; // İlk başta Child 1 görünür
  showUsers: boolean = false; // İlk başta Child 2 gizli

  constructor(private githubService: GithubService) { }

  ngOnInit(): void { }

  // Search componentinden alınan query string ile arama yapılır.
  searchByQueryString(eventData: { query: string }): void {
    this.searchQuery = eventData.query;
    if (this.searchQuery.trim() === '') {
      return; // Boş arama yapılamaz.
    }

    // searchUsers servisine subscribe olunur.
    this.githubService.searchUsers(this.searchQuery).subscribe((data: any) => {
      this.userListData = data.items;
      this.showFavorites = false;
      this.showUsers = true;

      // User'a isFav özelliği eklenerek kullanıcının favori olma durumuna göre boolean değer atanır.
      this.userListData.forEach(user => {
        this.favoriteUsers.some(element => user.login === element.login) ? user.isFav = true : user.isFav = false;
      });
    });
  }

  // Kullanıcıyı favoriye ekleme methodu
  addToFavorites(user: any) {
    this.githubService.addToFavorites(user);
    if (this.favoriteUsers.length < 5) {
      this.favoriteUsers.push(user);
    }
    user.isFav = true;
  }

  // Kullanıcıyı favorilerden çıkarma methodu
  removeFromFavorites(user: any) {
    this.githubService.removeFromFavorites(user);
    user.isFav = false;
  }
}
