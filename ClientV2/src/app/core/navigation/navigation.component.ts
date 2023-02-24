import { Component, OnInit } from '@angular/core';
import { GlobaldataService } from '../services/globaldata.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit{

  anio = new Date().getFullYear();

  menu: boolean | undefined;

  constructor(private globalDataService: GlobaldataService) {}

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
