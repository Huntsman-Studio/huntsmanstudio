import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { GlobaldataService } from 'src/app/core/services/globaldata.service';

@Component({
  selector: 'app-tyres-lampoudis',
  templateUrl: './tyres-lampoudis.component.html',
  styleUrls: ['./tyres-lampoudis.component.scss']
})
export class TyresLampoudisComponent implements OnInit {

  constructor(
    private meta: Meta,
    private title: Title,
    public translate: TranslateService,
    private globalData: GlobaldataService) {
      let lang: string;
      globalData.lang.subscribe(val => lang = val);
      translate.setDefaultLang(lang!);
    }

  ngOnInit(): void {
    
  }

}
