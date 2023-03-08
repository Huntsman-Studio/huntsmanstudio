import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KernelComponent } from './kernel/kernel.component';
import { IonicMykonosComponent } from './ionic-mykonos/ionic-mykonos.component';
import { OlioramaComponent } from './oliorama/oliorama.component';
import { FeryeComponent } from './ferye/ferye.component';
import { TyresLampoudisComponent } from './tyres-lampoudis/tyres-lampoudis.component';
import { ToKatiAlloComponent } from './to-kati-allo/to-kati-allo.component';
import { WorkRoutingModule } from './work-routing.module';
import { BottomNavComponent } from './bottom-nav/bottom-nav.component';



@NgModule({
  declarations: [
    KernelComponent,
    IonicMykonosComponent,
    OlioramaComponent,
    FeryeComponent,
    TyresLampoudisComponent,
    ToKatiAlloComponent,
    BottomNavComponent
  ],
  imports: [
    CommonModule,
    WorkRoutingModule
  ]
})
export class WorkModule { }
