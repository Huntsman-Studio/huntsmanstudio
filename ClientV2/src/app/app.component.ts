import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { GlobaldataService } from './core/services/globaldata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Huntsman Studio';

  lang: string = "";

  constructor (
    public translate: TranslateService,
    globaldataService: GlobaldataService) {

      translate.addLangs(['en','el', 'it', 'sq', 'tr']);
      globaldataService.lang.subscribe( val => {
        this.lang = val;
      });
      translate.setDefaultLang(this.lang);
  }
}
