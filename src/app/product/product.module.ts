import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: ':id', component: DetailsComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [ListComponent, DetailsComponent],
  exports: [RouterModule ]
})
export class ProductModule { }
