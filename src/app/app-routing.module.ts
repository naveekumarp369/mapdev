import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './view/layout/layout.component';
import { LoginComponent } from './view/login/login.component';
const routes: Routes = [
  {path: 'pages',
  component: LayoutComponent,
  children: [
    {
      path: 'login',
      component: LoginComponent,
    },
  ]},
  {
    path: '**',
    redirectTo: 'pages/login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
