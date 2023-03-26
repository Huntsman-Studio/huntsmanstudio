import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-bottom-nav',
  templateUrl: './bottom-nav.component.html',
  styleUrls: ['./bottom-nav.component.scss']
})
export class BottomNavComponent implements OnInit {

  constructor(public translate: TranslateService) {
    // set languages
    translate.addLangs(['en', 'el', 'tr', 'it', 'sq']);
    translate.setDefaultLang('el');
  }

  ngOnInit(): void {
    
  }
}
