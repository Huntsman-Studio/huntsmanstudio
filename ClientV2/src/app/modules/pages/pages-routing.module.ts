import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ContactComponent } from "./contact/contact.component";
import { AboutComponent } from "./about/about.component";
import { WorkComponent } from "./work/work.component";

const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: "full" },
    { path: 'contact', component: ContactComponent },
    { path: 'work', component: WorkComponent },
    { path: 'about', component: AboutComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PagesRoutingModule {}