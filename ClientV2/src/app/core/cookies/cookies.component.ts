import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cookies',
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.scss']
})
export class CookiesComponent implements OnInit {

  cookie: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  handleCookie(): void {
    if (!this.cookie) {
      this.cookie = true;
    } else {
      this.cookie = false;
    }
  }
}
