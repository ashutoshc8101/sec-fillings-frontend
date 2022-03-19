import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/services/auth.service';
import { SearchService } from 'src/app/services/search.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [NgbDropdownConfig]
})
export class NavbarComponent {
  public iconOnlyToggled = false;
  public sidebarToggled = false;
  user = {
    username: '',
    email: ''
  };

  constructor(
    private authService: AuthService,
    config: NgbDropdownConfig,
    private router: Router,
    private searchService: SearchService,
    private userService: UserService
    ) {
    config.placement = 'bottom-right';
  }

  ngOnInit(): void {
    this.userService.getUser().then((res) => {
      this.user = res.data;
    }, (err) => {
      console.error(err);
    });
  }

  logout(): void {
    this.authService.logOut();
  }

  searchNav(query: string): void {
    if (this.router.url !== '/search') {
      this.router.navigate(['/search']);
    }
    this.searchService.setSearchQuery(query);
  }

  getSearchQuery(): string {
    return this.searchService.query;
  }

  toggleOffcanvas() {
    document.querySelector('.sidebar-offcanvas').classList.toggle('active');
  }

  toggleSidebar() {
    let body = document.querySelector('body');
    if((!body.classList.contains('sidebar-toggle-display')) && (!body.classList.contains('sidebar-absolute'))) {
      this.iconOnlyToggled = !this.iconOnlyToggled;
      if(this.iconOnlyToggled) {
        body.classList.add('sidebar-icon-only');
      } else {
        body.classList.remove('sidebar-icon-only');
      }
    } else {
      this.sidebarToggled = !this.sidebarToggled;
      if(this.sidebarToggled) {
        body.classList.add('sidebar-hidden');
      } else {
        body.classList.remove('sidebar-hidden');
      }
    }
  }
}
