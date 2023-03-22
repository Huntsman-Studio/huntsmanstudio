import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { DataService } from 'src/app/core/services/data.service';
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
    public translate: TranslateService) {
      // set languages
      translate.addLangs(['en', 'el', 'tr', 'it']);
      translate.setDefaultLang('el');
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
