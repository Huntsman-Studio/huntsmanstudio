import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  anio = new Date().getFullYear();

  constructor(public translate: TranslateService) {
    // set languages
    translate.addLangs(['en', 'el', 'tr', 'it']);
    translate.setDefaultLang('el');
  }

  ngOnInit(): void {}
}
