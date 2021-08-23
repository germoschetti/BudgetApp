import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  budget:number;
  remaining:number;
  constructor() { 
    this.budget = 0;
    this.remaining = 0;
  }
}
