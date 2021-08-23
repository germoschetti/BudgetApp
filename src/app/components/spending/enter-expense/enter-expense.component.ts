import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-enter-expense',
  templateUrl: './enter-expense.component.html',
  styleUrls: ['./enter-expense.component.css']
})
export class EnterExpenseComponent implements OnInit {
  expense: string;
  cost: number;
  isValid: boolean;
  costIsValid: boolean;
  listExpenses: object[]
  budget: {}

  @Output() expenses = new EventEmitter();
  @Output() budgets = new EventEmitter();

  constructor() {
    this.isValid = true;
    this.costIsValid = true;
    this.budget = JSON.parse(localStorage.getItem('budgetService'))
    this.listExpenses = []

  }

  ngOnInit(): void {
    localStorage.setItem('budgetService', JSON.stringify(this.budget))
  }

  agregar(form) {
    let budgetStorage = this.budget = JSON.parse(localStorage.getItem('budgetService'))
    console.log(budgetStorage['remaining'])
    if (this.cost < this.budget['remaining']) {
      this.costIsValid = true;
     
    } else {
      this.costIsValid = false;
    }

    if (this.expense != undefined && this.expense.trim().length > 0 && this.cost > 0) {
      this.isValid = true;
      //Seteo los datos de gastos dependiendo de si ya hay datos o no.
      let expenseData = JSON.parse(localStorage.getItem('listExpenses'));

      if (expenseData) {
        expenseData.push({ "expense": this.expense, "cost": this.cost })
        localStorage.setItem('listExpenses', JSON.stringify(expenseData))
        this.listExpenses = JSON.parse(localStorage.getItem('listExpenses'))

      } else {
        this.listExpenses.push({ "expense": this.expense, "cost": this.cost })
        localStorage.setItem('listExpenses', JSON.stringify(this.listExpenses))
        this.listExpenses = JSON.parse(localStorage.getItem('listExpenses'))
      }

      //Seteo el budget dependiendo de si ya hay datos o no
      let budgetStorage = this.budget = JSON.parse(localStorage.getItem('budgetService'))

      if (budgetStorage) {
        let data = { 'budget': this.budget['budget'], 'remaining': budgetStorage['remaining'] - this.cost }
        localStorage.setItem('budgetService', JSON.stringify(data))
        this.budget = JSON.parse(localStorage.getItem('budgetService'))
      } else {
        let data = { 'budget': this.budget['budget'], 'remaining': this.budget['remaining'] - this.cost }
        localStorage.setItem('budgetService', JSON.stringify(data))
        this.budget = JSON.parse(localStorage.getItem('budgetService'))
      }
      //Mando al componente padre los datos de presupuesto y los datos de gastos
      this.expenses.emit(this.listExpenses)
      this.budgets.emit(this.budget)

      form.reset();
    } else {
      this.isValid = false;
    }

  }

}
