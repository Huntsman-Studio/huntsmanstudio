import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(public router: Router){

  }

  ngOnInit(): void {
    
  }

  title = 'client';

  getPageBgColor(): string {
    if (this.router.url.includes("contact")) {
      return "bg-black";
    }
    else if (this.router.url.includes("work")) {
      return "bg-irishPurple md:bg-black";
    }
    else if (this.router.url.includes("about-us")) {
      return "bg-black";
    }
    else if (this.router.url.includes("nav")) {
      return "bg-primary";
    }
    else {
      return "bg-greySmoke"
    }
  }
}
