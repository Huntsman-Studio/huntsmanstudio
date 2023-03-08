import { Component, OnInit } from '@angular/core';
import { GlobaldataService } from '../services/globaldata.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit{

  anio = new Date().getFullYear();

  menu: boolean | undefined;

  constructor(private globalDataService: GlobaldataService, public translate: TranslateService) {
    translate.addLangs(['en','el','tr','it']);
    translate.setDefaultLang('el');
  }

  ngOnInit(): void {
    // Check menu
    this.globalDataService.menu.subscribe(val => {
      this.menu = val;
    });
  }

  closeMenu(): void {
    this.globalDataService.showHideMenu(false);
  }
}
