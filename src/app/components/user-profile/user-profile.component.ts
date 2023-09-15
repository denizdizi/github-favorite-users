import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubService } from '../../services/github.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: any;

  constructor(private route: ActivatedRoute, private githubService: GithubService) { }

  ngOnInit() {
    // Kullanıcı profiline yönlendirme methodu
    this.route.params.subscribe(params => {
      const userId = params['id'];

      if (userId) {
        this.githubService.getUserProfile(userId).subscribe((data: any) => {
          this.user = data;
        });
      }
    });
  }
}
