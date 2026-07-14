import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  imports: [],
  templateUrl: './interpolation.html',
  styleUrl: './interpolation.css',
})
export class Interpolation {
  protected userName = 'Angular Student';
  protected readonly userEmail = signal('angular_student@itvdn.com');

  protected readonly user = signal({
    name: 'Angular Student',
    email: 'angular_student@cbs.com.ua'
  });

  // unloadedUser - імітує значення яке завантажується з серверу і наразі відсутнє
  protected readonly unloadedUser = signal<User | undefined>(undefined);
}

interface User {
  name: string,
  email: string
}
