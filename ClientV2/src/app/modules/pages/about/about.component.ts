import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit {

  constructor(private meta: Meta, 
    private title: Title,
    public translate: TranslateService) {
      translate.addLangs(['en', 'el', 'tr', 'it', 'sq']);
      translate.setDefaultLang('el');
    }

  ngOnInit(): void {}
}
