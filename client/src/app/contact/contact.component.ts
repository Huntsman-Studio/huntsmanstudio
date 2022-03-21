import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public copy = false;

  constructor(private _meta: Meta, private _title: Title, private clipboard: Clipboard) {

    this._meta.addTags([
      { name: 'description', content: 'Contact page of HUntsmanStudio' },
      { name: 'author', content: 'Delevoperrs Department of HuntsmanStudio' },
      { name: 'keywords', content:'Huntsman, Studio, Contact' }
    ]);

    this.setTitle('Contact');
  }

  public setTitle(title: string){
    this._title.setTitle(title + ' | Huntsman Studio');
  }

  ngOnInit(): void {
  }

  // Copy to ClipBoard
  copyText(textToCopy: string) {
    this.clipboard.copy(textToCopy);
    this.copy = true;

    setTimeout( () => {
      this.copy = false;
      // console.log("beforeTime");
    } , 1000);

    // console.log("afterTime");
    // this.copy = true;
  }

}
