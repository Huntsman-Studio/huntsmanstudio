import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { GlobaldataService } from 'src/app/core/services/globaldata.service';

@Component({
  selector: 'app-bottom-nav',
  templateUrl: './bottom-nav.component.html',
  styleUrls: ['./bottom-nav.component.scss']
})
export class BottomNavComponent implements OnInit {

  constructor(
    public translate: TranslateService,
    private globalData: GlobaldataService) {

      let lang: string;
      globalData.lang.subscribe(val => {
        lang = val;
      });
      translate.setDefaultLang(lang!);
    }

  ngOnInit(): void {
    
  }
}
