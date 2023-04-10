import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Clipboard } from '@angular/cdk/clipboard';
import { TranslateService } from '@ngx-translate/core';
import { GlobaldataService } from 'src/app/core/services/globaldata.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(
    private meta: Meta, 
    private title: Title, 
    private clipboard: Clipboard,
    public translate: TranslateService,
    private globalData: GlobaldataService) {
      let lang: string;
      globalData.lang.subscribe(val => {
        lang = val;
      });
      translate.setDefaultLang(lang!);
    }

  ngOnInit(): void {}

  copyEmail(): void {
    this.clipboard.copy("receiver@huntsmanstudio.gr");
  }
}
