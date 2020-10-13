import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  template:
  // './profile.component.html',
  `
    <section class="hero is-primary is-fullheight is-bold">
    <div class="hero-body">
    <div class="container">

      <h1 class="title">this is my profile!</h1>
      <img src="assets/image/resume.jpg">
    </div>
    </div>
    </section>
  `,
  styles:


  [`
  .hero {
    background-image: url('/assets/image/back1.jpg') !important;
    background-size: cover;
    background-position: center center;
  }
  `]
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
