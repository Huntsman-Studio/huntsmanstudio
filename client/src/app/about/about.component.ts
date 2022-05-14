import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private _meta: Meta, private _title: Title) {

    this._meta.addTags([
      { name: 'description', content: 'Learn more about us and our vision' },
      { name: 'author', content: 'Developers Department of Huntsman Studio' },
      { name: 'keywords', content: 'About, Huntsman Studio, History, Thessaloniki'},
      { name: 'robots', content: 'about-us, follow'}
    ]);

    this.setTitle('About Us');
  }

  public setTitle(title: string) {
    this._title.setTitle(title + ' | Huntsman Studio');
  }

  ngOnInit(): void {
  }

}
