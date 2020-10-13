import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template:
  // './footer.component.html',
  `
    <footer class="footer">
    <div class="container">
    <div class="content has-text-centered">
      <p >
        Made with <3 by <a href="https://www.linkedin.com/">Yang Rao</a>
      </p>
    </div>
    </div>
    </footer>
  `,

  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
