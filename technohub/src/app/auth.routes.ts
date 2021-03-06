import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from  './login/login.component';
import { SignupComponent } from './signup/signup.component';
export const router: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    //{ path: 'members', component: MembersComponent, canActivate: [AuthGuard] }
    
  ]

  export const routes: ModuleWithProviders = RouterModule.forRoot(router);