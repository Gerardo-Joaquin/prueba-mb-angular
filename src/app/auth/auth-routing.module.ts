import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { CreateComponent } from './components/create/create.component';
import { sessionGuard } from '../guards/auth/session.guard';

const routes: Routes = [
  {
    path: 'login', component: AuthComponent, canActivate: [sessionGuard]
  },
  {
    path: 'create', component: CreateComponent
  },
  {
    path:'',
    pathMatch: 'full',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
