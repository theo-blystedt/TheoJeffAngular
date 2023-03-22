import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/auth.guard';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AddTeamComponent } from './add-team/add-team.component';
import { TeamListComponent } from './team-list/team-list.component';

const routes: Routes = [
  { path: '', redirectTo:'login', pathMatch:'full'},
  { path:'login', component: LoginComponent},
  { path:'register', component: RegisterComponent},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'add-team', component: AddTeamComponent, canActivate: [AuthGuard] },
  { path: 'team-list', component: TeamListComponent,canActivate:[AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
