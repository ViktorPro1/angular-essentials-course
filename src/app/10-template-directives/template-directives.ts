import { CommonModule } from "@angular/common";
import { Component } from '@angular/core';

@Component({
  selector: 'app-template-directives',
  imports: [CommonModule],
  templateUrl: './template-directives.html',
  styleUrl: './template-directives.css',
})
export class TemplateDirectives {
  getStyles() {
    return {
      color: 'green',
      fontWeight: 'bold'
    };
  }

  getColor() {
    return 'red'
  }

  getClass() {
    return {
      'light-bg': true,
      'border': false
    }
  }

  isHiglited() {
    return true;
  }

}
