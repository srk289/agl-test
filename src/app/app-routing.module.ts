import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatListComponent } from './cat-list/cat-list.component';


const routes: Routes = [{
  path: 'cats',
  component: CatListComponent
},
{
  path: '',
  redirectTo: 'cats',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
