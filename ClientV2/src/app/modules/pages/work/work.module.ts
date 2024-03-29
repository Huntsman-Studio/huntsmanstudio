import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KernelComponent } from './kernel/kernel.component';
import { IonicMykonosComponent } from './ionic-mykonos/ionic-mykonos.component';
import { OlioramaComponent } from './oliorama/oliorama.component';
import { FeryeComponent } from './ferye/ferye.component';
import { TyresLampoudisComponent } from './tyres-lampoudis/tyres-lampoudis.component';
import { WorkRoutingModule } from './work-routing.module';
import { BottomNavComponent } from './bottom-nav/bottom-nav.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { httpTranslateLoader } from '../pages.module';
import { HttpClient } from '@angular/common/http';



@NgModule({
  declarations: [
    KernelComponent,
    IonicMykonosComponent,
    OlioramaComponent,
    FeryeComponent,
    TyresLampoudisComponent,
    BottomNavComponent
  ],
  imports: [
    CommonModule,
    WorkRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    })
  ]
})
export class WorkModule { }
