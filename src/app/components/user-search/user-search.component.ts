import { Component, Input, Output, EventEmitter } from '@angular/core';
import { GithubService } from '../../services/github.service';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent {
  searchQuery: string = '';
  searchResults: any[] = [];
  @Output() getQueryString = new EventEmitter<{ query: string }>();

  constructor(private githubService: GithubService) { }

  searchUsers() {
    this.getQueryString.emit({ query: this.searchQuery });
  }

  onInputChange() { }
}
