import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CookiesComponent } from './cookies/cookies.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CookiesComponent,
    NavigationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CookiesComponent,
    NavigationComponent
  ]
})
export class CoreModule { }
