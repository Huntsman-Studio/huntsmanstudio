import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-oliorama',
  templateUrl: './oliorama.component.html',
  styleUrls: ['./oliorama.component.scss']
})
export class OlioramaComponent implements OnInit {

  constructor(
    private meta: Meta,
    private title: Title,
    public translate: TranslateService) {}

  ngOnInit(): void {
    
  }
}
