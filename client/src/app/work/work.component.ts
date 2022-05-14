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
      { name: 'description', content: "Maybe you'll find something interesting in our portfolio. Check it out, we might impress you." },
      { name: 'author', content: 'Developrs Department of Huntsman Studio' },
      { name: 'keywords', contnet: 'Apps, Development, Design, Architecture, Branding, Marketing'},
      { name: 'robots', content: 'work, follow'}
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
