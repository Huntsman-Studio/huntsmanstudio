import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { GlobaldataService } from '../services/globaldata.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  anio = new Date().getFullYear();

  constructor(
    public translate: TranslateService,
    private globalData: GlobaldataService) {
      let lang: string;
      globalData.lang.subscribe( val => {
        lang = val
      });
      translate.setDefaultLang(lang!);
  }

  ngOnInit(): void {}
}
