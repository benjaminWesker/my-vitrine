import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AmongTreeComponent } from './among-tree/among-tree.component';
import { BannerComponent } from './banner/banner.component';
import { HomeComponent } from './home/home.component';
import { CircleComponent } from './circle/circle.component';
import { PresentationComponent } from './presentation/presentation.component';
import { ParcoursComponent } from './parcours/parcours.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    AmongTreeComponent,
    BannerComponent,
    HomeComponent,
    CircleComponent,
    PresentationComponent,
    ParcoursComponent,
    ContactsComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
