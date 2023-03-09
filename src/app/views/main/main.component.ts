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

  constructor(private _formBuilder: FormBuilder) { }


  getCheckeds(): string {
    let count = 0;
    Object.values(this.options.value).forEach((option) => {
      if (option === true) count += 1;
    });

    return count == Object.values(this.options.value).length? "Todos" : count.toString();
  }
}
