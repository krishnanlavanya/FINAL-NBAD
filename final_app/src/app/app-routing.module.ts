import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../app/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';

import { AuthGuardService } from './auth-gaurd/auth-guard.service';
import { BudgetComponent } from './budget/budget.component';
import { ExpensesComponent } from './expenses/expenses.component';
const routes: Routes = [
  {
    path:'',component:HomeComponent,
    canActivate: [AuthGuardService]
  },
  {
    path:'login',component:LoginComponent,

  },

  {
    path:'register',component:RegisterComponent
  },
  {
    path: 'dashboard', component: DashboardComponent,
    canActivate: [AuthGuardService]
  } ,
   {
    path: 'budget', component: BudgetComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'expenses', component: ExpensesComponent,
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

