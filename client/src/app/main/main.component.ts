import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  anio = new Date().getFullYear();

  constructor(private _meta: Meta, private _title: Title) {

    // Set meta to page
    this._meta.addTags([
      { name: 'description', content: 'Home page of HuntsmanStudio' },
      { name: 'author', content: 'Developers department of HuntsmanStudio' },
      { name: 'keywords', content: 'Apps, Websites, Branding, Marketing' }
    ]);

    this.setTitle('Home');
  }

  // Set page title
  public setTitle(title: string){
    this._title.setTitle(title + " | Huntsman Studio");
  }

  ngOnInit(): void {
  }

  goTo(link: string){
    window.open(link, "_blank");
  }

}
