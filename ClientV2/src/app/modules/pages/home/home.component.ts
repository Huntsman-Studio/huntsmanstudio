import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  constructor(private meta: Meta, private title: Title, public translate: TranslateService) {
    translate.addLangs(['en','el','tr','it']);
    translate.setDefaultLang('el');
  }

  ngOnInit(): void { }
}
