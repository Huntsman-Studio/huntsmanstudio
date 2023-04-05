import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-ferye',
  templateUrl: './ferye.component.html',
  styleUrls: ['./ferye.component.scss']
})
export class FeryeComponent implements OnInit {

  constructor(
    private meta: Meta,
    private title: Title,
    public translate: TranslateService) {}

  ngOnInit(): void {
    
  }
}
