import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { GlobaldataService } from 'src/app/core/services/globaldata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  constructor(private meta: Meta, 
    private title: Title, 
    public translate: TranslateService,
    private globalDataService: GlobaldataService) {
      let lang: string;
      globalDataService.lang.subscribe( val => {
        lang = val
      });
      translate.setDefaultLang(lang!);
  }

  ngOnInit(): void { }
}
