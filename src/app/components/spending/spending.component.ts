import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-spending',
  templateUrl: './spending.component.html',
  styleUrls: ['./spending.component.css']
})
export class SpendingComponent implements OnInit {
  budgetStorage: {};
  remaining: number;
  listExpenses: object[]
  budgetList: any
  constructor(
    private _budgetService: BudgetService,
    private _router: Router
  ) {
    this.listExpenses = [];
  }

  ngOnInit(): void {
    //Me fijo si tengo datos en el storage para mostrar
    let expenseStorage = JSON.parse(localStorage.getItem('listExpenses'))
    this.budgetStorage = JSON.parse(localStorage.getItem('budgetService'))
    if (this.budgetStorage['budget'] == 0) {
      this._router.navigate(['/'])
    }
    this.getBudget(this.budgetStorage)
    if (expenseStorage) {
      this.listExpenses = expenseStorage.reverse()
    }
  }

  getExpenses(expense): void {
    this.listExpenses = JSON.parse(localStorage.getItem('listExpenses')).reverse();
  }

  getBudget(budgets): void {
    this.budgetList = localStorage.getItem('budgetService')
    this.budgetList = budgets;
  }



}
