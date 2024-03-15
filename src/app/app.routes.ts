import { Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DepositeComponent } from './deposite/deposite.component';
import { WithdrawalComponent } from './withdrawal/withdrawal.component';
import { ProfileComponent } from './profile/profile.component';
import { TransferComponent } from './transfer/transfer.component';

export const routes: Routes = [
    { path: "signin", component: SigninComponent },
    { path: "signup", component: SignupComponent },
    { path: "dashboard", component: DashboardComponent },
    { path: "deposit", component: DepositeComponent },
    { path: "withdrawal", component: WithdrawalComponent },
    { path: "transfer", component:TransferComponent },
    { path: "profile", component: ProfileComponent },
    { path: "", pathMatch: "full", redirectTo: "signin" },
    { path: "**", redirectTo: "signin" },
];
