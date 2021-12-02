import { Component, Input, OnInit } from '@angular/core';
import { Expense } from '../../models/Expense';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("expenses in expenses comp")
  }

  @Input() expenses: Expense[] = [];

}
