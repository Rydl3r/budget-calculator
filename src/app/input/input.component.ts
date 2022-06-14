import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Expense } from '../../models/Expense';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  inputForm = new FormGroup({
    description: new FormControl(),
    value: new FormControl(),
  });

  @Output() inputDataEmitter = new EventEmitter<Expense>();

  onSubmit() {
    if (this.inputForm.valid) {
      this.inputDataEmitter.emit(this.inputForm.value);
      this.inputForm.reset();
    } else {
      alert('The input is invalid. Please, try again');
    }
  }
}
