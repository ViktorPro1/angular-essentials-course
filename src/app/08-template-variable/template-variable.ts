import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-template-variable',
  imports: [],
  templateUrl: './template-variable.html',
  styleUrl: './template-variable.css',
})
export class TemplateVariable {

  protected readonly users = signal([
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      shippingAddress: {
        main: {
          number: '12B',
          street: 'Main Street',
          zipcode: '12345',
          city: 'New York'
        }
      }
    },
    {
      id: 2,
      firstName: 'Anna',
      lastName: 'Smith',
      shippingAddress: {
        main: {
          number: '45',
          street: 'Highland Ave',
          zipcode: '90210',
          city: 'Los Angeles'
        }
      }
    }
  ]);
}
