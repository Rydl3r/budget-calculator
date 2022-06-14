import { Component, OnInit } from '@angular/core';
import { Expense } from '../../models/Expense';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  expenses: Expense[] = [];

  totalBudget: number = 0;

  addItem(newItem: Expense) {
    this.expenses.unshift(newItem);
    this.totalBudget += newItem.value;
  }
}
