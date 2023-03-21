import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobaldataService {

  public menu: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public lang: BehaviorSubject<string> = new BehaviorSubject<string>("el");

  constructor() { }

  // showHideMenu
  showHideMenu(value: boolean) {
    this.menu.next(value);
  }

  // setLanguage
  language(lang: string): void {
    this.lang.next(lang);
  }
}
