import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './components/todo/todo.component';
import { PagesComponent } from './components/pages/pages.component';

const routes: Routes = [
  { path: '', component: TodoComponent },
  { path: 'about', component: PagesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
