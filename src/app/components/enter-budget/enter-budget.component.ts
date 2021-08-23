import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-enter-budget',
  templateUrl: './enter-budget.component.html',
  styleUrls: ['./enter-budget.component.css']
})
export class EnterBudgetComponent implements OnInit {
  isValid: boolean;
  budget: number;
  constructor(
    private _budgetService: BudgetService,
    private _router: Router
  ) {
    localStorage.clear()
  }

  ngOnInit(): void {
  }

  addBudget(form): void {

    if (this.budget > 0) {
      this.isValid = true;
      this._budgetService.budget = this.budget;
      this._budgetService.remaining = this.budget;
      this._router.navigate(['/spending'])
      localStorage.setItem('budgetService', JSON.stringify(this._budgetService))
      form.reset();
    } else {
      this.isValid = false;
    }
  }


}
