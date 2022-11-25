import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './Components/sign-in/sign-in.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './Components/verify-email/verify-email.component';

const routes: Routes = [
  {path:'', redirectTo:'/sign-in', pathMatch:'full'},
  {path:'sign-in', component: SignInComponent },
  {path:'register-user', component: SignUpComponent },
  {path:'dashboard', component: DashboardComponent },
  {path:'forgot-password', component: ForgotPasswordComponent },
  {path:'verify-email-address', component: VerifyEmailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
