import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template:
  // './home.component.html',
  `
    <section class="hero is-info is-fullheight is-bold">
    <div class="hero-body">
    <div class="container">

      <h1 class="title has-text-centered">Welcome to my home page!</h1>

    </div>
    </div>
    </section>
  `,
  styles: [

  `
    .hero {
      background-image: url('/assets/image/back1.jpg') !important;
      background-size: cover;
      background-position: center center;
    }
  `
  ]
})
export class HomeComponent  {

  // constructor() { }

  // ngOnInit(): void {
  // }

}
