import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpendingComponent } from './components/spending/spending.component';
import { EnterBudgetComponent } from './components/enter-budget/enter-budget.component';
import { EnterExpenseComponent } from './components/spending/enter-expense/enter-expense.component';
import { ListExpensesComponent } from './components/spending/list-expenses/list-expenses.component';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    SpendingComponent,
    EnterBudgetComponent,
    EnterExpenseComponent,
    ListExpensesComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
