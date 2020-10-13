import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template:
  // './header.component.html',
  `
    <nav class="navbar is-dark" >

      <!-- logo -->
      <div class="navbar-brand">
        <a class="navbar-item" href="https://github.com/royyy123">
          <img src="/assets/image/download.png" >Github
        </a>
      </div>

      <div class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item" routerLink="/">Home</a>
          <a class="navbar-item" routerLink="profile">Profile</a>
        </div>
      </div>



    </nav>
  `,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
