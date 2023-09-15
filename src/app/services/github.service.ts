import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private apiUrl = 'https://api.github.com';

  constructor(private http: HttpClient) { }

  // Github API'den kullanıcı arama işlemi
  searchUsers(query: string): Observable<any> {
    const searchUrl = `${this.apiUrl}/search/users?q=${query}`;
    return this.http.get(searchUrl);
  }

  // Github API'den kullanıcı profilini getirme işlemi
  getUserProfile(userId: string): Observable<any> {
    const profileUrl = `${this.apiUrl}/users/${userId}`;
    return this.http.get(profileUrl);
  }

  // Favori kullanıcıları saklama işlemi
  addToFavorites(user: any) {
    const favorites = this.getFavorites();
    if (!this.isFavorite(user, favorites)) {
      if (favorites.length < 5) {
        favorites.push(user);
        this.saveFavorites(favorites);
      } else {
        alert('You can add up to 5 favorites.');
      }
    } else {
      alert('This user is already in your favorites.');
    }
  }

  // Favori kullanıcıları getirme işlemi
  getFavorites(): any[] {
    const favorites = localStorage.getItem('favorites');
    return favorites ? JSON.parse(favorites) : [];
  }

  // Favori kullanıcıları kaldırma işlemi
  removeFromFavorites(user: any) {
    const favorites = this.getFavorites();
    const index = favorites.findIndex((favUser: any) => favUser.id === user.id);
    if (index !== -1) {
      favorites.splice(index, 1);
      this.saveFavorites(favorites);
    }
  }

  // Kullanıcıları local storage a kaydetme işlemi
  saveFavorites(favorites: any[]): void {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }

  // Kullanıcının favori olup olmadığını kontrol işlemi
  isFavorite(user: any, favorites: any[]): boolean {
    return favorites.some((favUser: any) => favUser.id === user.id);
  }
}
