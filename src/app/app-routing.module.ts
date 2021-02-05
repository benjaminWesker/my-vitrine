import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AmongTreeComponent } from './among-tree/among-tree.component';
import { CircleComponent } from './circle/circle.component';
import { HomeComponent } from './home/home.component';
import { SpaceTravelComponent } from './space-travel/space-travel.component';

const routes: Routes = [
  {path: 'among-tree', component: AmongTreeComponent},
  {path: 'circle', component: CircleComponent},
  {path: 'space-travel', component: SpaceTravelComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
