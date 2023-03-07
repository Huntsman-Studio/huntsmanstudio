import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { WorkComponent } from "./work.component";
import { KernelComponent } from "./kernel/kernel.component";
import { FeryeComponent } from "./ferye/ferye.component";
import { IonicMykonosComponent } from "./ionic-mykonos/ionic-mykonos.component";
import { OlioramaComponent } from "./oliorama/oliorama.component";
import { ToKatiAlloComponent } from "./to-kati-allo/to-kati-allo.component";
import { TyresLampoudisComponent } from "./tyres-lampoudis/tyres-lampoudis.component";

const routes: Routes = [
    { path: '', component: WorkComponent, pathMatch: "full" },
    { path: 'kernel', component: KernelComponent },
    { path: 'ferye', component: FeryeComponent },
    { path: 'ionic-mykonos', component: IonicMykonosComponent },
    { path: 'oliorama', component: OlioramaComponent },
    { path: 'to-kati-allo', component: ToKatiAlloComponent },
    { path: 'tyres-lampoudis', component: TyresLampoudisComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class WorkRoutingModule { }