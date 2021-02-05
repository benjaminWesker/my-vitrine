import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AmongTreeComponent } from './among-tree/among-tree.component';
import { BannerComponent } from './banner/banner.component';
import { HomeComponent } from './home/home.component';
import { CircleComponent } from './circle/circle.component';
import { SpaceTravelComponent } from './space-travel/space-travel.component';
import { BoxPlaneteComponent } from './box-planete/box-planete.component';
import { PlaneteService } from './service/planete-service';

@NgModule({
  declarations: [
    AppComponent,
    AmongTreeComponent,
    BannerComponent,
    HomeComponent,
    CircleComponent,
    SpaceTravelComponent,
    BoxPlaneteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    PlaneteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
