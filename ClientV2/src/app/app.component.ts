import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Huntsman Studio';

  constructor (public translate: TranslateService) {
    translate.addLangs(['en','el']);
    translate.setDefaultLang('el');
  }
}
