import { Component } from '@angular/core';

@Component({
  selector: 'app-local-variable',
  imports: [],
  templateUrl: './local-variable.html',
  styleUrl: './local-variable.css'
})
export class LocalVariable {
  show(message: string) {
    console.log(message);
  }
}
