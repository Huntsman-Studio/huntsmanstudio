import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Location } from '@angular/common';
import { NavService } from '../nav.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  public previousUrl: any;

  constructor(private _router: Router,
              public _location: Location,
              private NavService: NavService) { }

  ngOnInit() {
    this.previousUrl = this.NavService.getPreviousUrl();
    console.log(this.previousUrl);
  }

}
