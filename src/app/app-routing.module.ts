import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/auth.guard';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AddCatComponent } from './add-cat/add-cat.component';
import { CatListComponent } from './cat-list/cat-list.component';

const routes: Routes = [
  { path: '', redirectTo:'login', pathMatch:'full'},
  { path:'login', component: LoginComponent},
  { path:'register', component: RegisterComponent},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'add-cat', component: AddCatComponent, canActivate: [AuthGuard] },
  { path: 'cat-list', component: CatListComponent,canActivate:[AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
