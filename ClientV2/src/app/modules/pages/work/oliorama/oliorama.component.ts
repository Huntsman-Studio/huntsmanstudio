import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { GlobaldataService } from 'src/app/core/services/globaldata.service';

@Component({
  selector: 'app-oliorama',
  templateUrl: './oliorama.component.html',
  styleUrls: ['./oliorama.component.scss']
})
export class OlioramaComponent implements OnInit {

  constructor(
    private meta: Meta,
    private title: Title,
    public translate: TranslateService,
    public globalData: GlobaldataService) {

      let lang: string;
      globalData.lang.subscribe(val => {
        lang = val;
      })
      translate.setDefaultLang("el");
    }

  ngOnInit(): void {
    
  }
}
