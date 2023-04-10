import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { GlobaldataService } from 'src/app/core/services/globaldata.service';

@Component({
  selector: 'app-ionic-mykonos',
  templateUrl: './ionic-mykonos.component.html',
  styleUrls: ['./ionic-mykonos.component.scss']
})
export class IonicMykonosComponent implements OnInit {

  constructor(
    private meta: Meta,
    private title: Title,
    public translate: TranslateService, 
    private globalData: GlobaldataService) {
      let lang: string;
      globalData.lang.subscribe( val => lang = val);
      translate.setDefaultLang(lang!);
    }

  ngOnInit(): void {
    
  }
}
