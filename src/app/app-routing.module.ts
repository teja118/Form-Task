import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

 import { RegComponent } from './reg/reg.component';
 import { ListComponent } from './list/list.component';

const routes: Routes = [
   { path: 'reg', component: RegComponent },
   { path: 'list', component: ListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
