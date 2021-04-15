import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SiteGuard } from './core/guards/site.guard';

const routes: Routes = [
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(mod => mod.RegisterModule)
  },
  {
    path: '',
    loadChildren: () => import('./site/site.module').then(mod => mod.SiteModule),
    canActivate: [SiteGuard]
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
