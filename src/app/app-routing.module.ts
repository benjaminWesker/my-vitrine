import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AmongTreeComponent } from './among-tree/among-tree.component';
import { CircleComponent } from './circle/circle.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { ParcoursComponent } from './parcours/parcours.component';
import { PresentationComponent } from './presentation/presentation.component';

const routes: Routes = [
  {path: 'among-tree', component: AmongTreeComponent},
  {path: 'circle', component: CircleComponent},
  {path: 'presentation', component: PresentationComponent},
  {path: 'parcours', component: ParcoursComponent},
  {path: 'contact', component: ContactsComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
