import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { GlobaldataService } from 'src/app/core/services/globaldata.service';

@Component({
  selector: 'app-kernel',
  templateUrl: './kernel.component.html',
  styleUrls: ['./kernel.component.scss']
})

export class KernelComponent implements OnInit {

  constructor(
    private meta: Meta, 
    private title: Title,
    public translate: TranslateService,
    public globalData: GlobaldataService) {
      let lang: string;
      globalData.lang.subscribe( val => {
        lang = val;
      });
      translate.setDefaultLang(lang!);
    }

  ngOnInit(): void {

  }
}
