import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { DataService } from 'src/app/core/services/data.service';
import { GlobaldataService } from 'src/app/core/services/globaldata.service';
import { IWork } from 'src/app/models/work';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  work: IWork[] = [];

  constructor(private meta: Meta, 
    private title: Title, 
    private data: DataService, 
    public translate: TranslateService,
    private globalData: GlobaldataService) {
      
      let lang: string;
      globalData.lang.subscribe( val => {
        lang = val;
      });
      translate.setDefaultLang(lang!);
    }

  ngOnInit(): void {
    this.getWorkList();
  }

  getWorkList(): void {
    this.data.getWorkList().subscribe( (val) => {
      this.work = val;
    })
  }
}
