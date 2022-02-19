import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  constructor(public _router: Router) { }

  ngOnInit(): void {
  }

  contact(){
    this._router.navigateByUrl('/contact')
  }
}
