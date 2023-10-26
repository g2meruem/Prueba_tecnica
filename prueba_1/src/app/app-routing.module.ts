import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Vista1Component } from './vista1/vista1.component';
import { Vista2Component } from './vista2/vista2.component';

const routes: Routes = [
  { path: '', component: Vista1Component },
  { path: 'vista1', component: Vista1Component },
  { path: 'vista2', component: Vista2Component },
  { path: 'vista2', component: Vista2Component, data: { text: 'vista2' } },
  { path: 'vista2', component: Vista2Component, data: { text: 'vista2' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
