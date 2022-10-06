import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridviewComponent } from './gridview/gridview.component';
import { ListviewComponent } from './listview/listview.component';

const routes: Routes = [
  {
    path:'gridview',
    component:GridviewComponent
  },
  {
    path:'listview',
    component:ListviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
