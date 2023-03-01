import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DataService } from 'src/app/core/services/data.service';
import { IWork } from 'src/app/models/work';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  work: IWork[] = [];

  constructor(private meta: Meta, private title: Title, private data: DataService) {}

  ngOnInit(): void {
    this.getWorkList();
  }

  getWorkList(): void {
    this.data.getWorkList().subscribe( (val) => {
      this.work = val;
    })
  }
}
