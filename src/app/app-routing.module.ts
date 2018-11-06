import { BoxshadowComponent } from './boxshadow/boxshadow.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GradientComponent } from 'src/app/gradient/gradient.component';

const routes: Routes = [
  {
    path: 'gradient',
    component: GradientComponent
  },
  {
    path: 'boxshadow',
    component: BoxshadowComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
