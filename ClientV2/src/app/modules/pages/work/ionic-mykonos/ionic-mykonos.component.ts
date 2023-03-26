import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-ionic-mykonos',
  templateUrl: './ionic-mykonos.component.html',
  styleUrls: ['./ionic-mykonos.component.scss']
})
export class IonicMykonosComponent implements OnInit {

  constructor(private meta: Meta,
    private title: Title,
    public translate: TranslateService) {
      // set language
      translate.addLangs(['en', 'el', 'tr', 'it']);
      translate.setDefaultLang('el');
    }

  ngOnInit(): void {
    
  }
}
