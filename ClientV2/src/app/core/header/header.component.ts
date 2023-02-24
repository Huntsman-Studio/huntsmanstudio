import { Component, OnInit } from '@angular/core';
import { GlobaldataService } from '../services/globaldata.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private globalDataService: GlobaldataService) {}

  ngOnInit(): void {}

  openMenu(): void {
    this.globalDataService.showHideMenu(true);
  }
}
