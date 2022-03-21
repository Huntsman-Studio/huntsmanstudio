import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  constructor(public _router: Router, private _meta: Meta, private _title: Title) {

    this._meta.addTags([
      { name: 'description', content: 'A page where you can find all the projects that Huntsman Studio has worked on' },
      { name: 'author', content: 'Developrs Department of Huntsman Studio' },
      { name: 'keywords', contnet: 'Apps, Development, Design, Architecture, Branding, Marketing' }
    ]);

    this.setTitle('Work');
  }

  public setTitle(title: string){
    this._title.setTitle(title + ' | Huntsman Studio');
  }

  ngOnInit(): void {
  }

  contact(){
    this._router.navigateByUrl('/contact')
  }
}
