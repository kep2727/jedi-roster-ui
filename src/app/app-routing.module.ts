import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JediListComponent } from './jedi-list/jedi-list.component';
import { JediEditComponent } from './jedi-edit/jedi-edit.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'jedi-list',
    component: JediListComponent
  },
  {
    path: 'jedi-add',
    component: JediEditComponent
  },
  {
    path: 'jedi-edit/:id',
    component: JediEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
