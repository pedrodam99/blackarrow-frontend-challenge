import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  options = this._formBuilder.group({
    opt1: false,
    opt2: false,
    opt3: false,
    opt4: false,
  });

  constructor(private _formBuilder: FormBuilder) {
    console.log(Object.values(this.options.value));
  }

  getChecked(): string {
    const options = Object.values(this.options.value);
    let count = 0;

    options.forEach((p) => {
      if (p === true) count += 1;
    });

    return count == 4? "Todos" : count.toString();
  }
}
