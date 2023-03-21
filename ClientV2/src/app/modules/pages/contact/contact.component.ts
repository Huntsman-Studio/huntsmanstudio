import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Clipboard } from '@angular/cdk/clipboard';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private meta: Meta, 
    private title: Title, 
    private clipboard: Clipboard,
    public translate: TranslateService) {
      // set languages
      translate.addLangs(['en', 'el', 'tr', 'it']);
      translate.setDefaultLang('el');
    }

  ngOnInit(): void {}

  copyEmail(): void {
    this.clipboard.copy("receiver@huntsmanstudio.gr");
  }
}
