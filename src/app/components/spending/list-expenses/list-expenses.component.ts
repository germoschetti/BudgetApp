import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-expenses',
  templateUrl: './list-expenses.component.html',
  styleUrls: ['./list-expenses.component.css']
})
export class ListExpensesComponent implements OnInit {
  budgetService:any
  //remaining:number;
  @Input() budget:any;
  @Input() expenses:any;

  constructor() {}

  ngOnInit(): void {}

  deleteExpense(i){
  // Reasigno el costo eliminado a la propiedad remining en el storgae
    let data =  {"budget":this.budget.budget,"remaining": (this.budget.remaining + this.expenses[i].cost)}
    localStorage.setItem('budgetService', JSON.stringify(data))
    this.budget = JSON.parse(localStorage.getItem('budgetService'))

    // Elimino el gasto pertinente y actualizo el storage
    this.expenses.splice(i, 1)
    localStorage.setItem('listExpenses', JSON.stringify(this.expenses))
    this.expenses = JSON.parse(localStorage.getItem('listExpenses'))
  }
}
