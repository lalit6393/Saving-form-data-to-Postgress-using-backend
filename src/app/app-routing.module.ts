import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'

import { FormIntroComponent } from './components/form-intro/form-intro.component';
import { MyWebpageComponent } from './components/my-webpage/my-webpage.component';

const routes:Routes = [
  {path: '', redirectTo: 'intro', pathMatch: 'full'},
  {path : 'intro', component: FormIntroComponent},
  { path: 'web-page', component: MyWebpageComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
     RouterModule.forRoot(routes, { useHash:true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
