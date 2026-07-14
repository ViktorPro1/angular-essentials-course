import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  imports: [],
  templateUrl: './property-binding.html',
  styleUrls: ['./property-binding.css'],
})
export class PropertyBinding {
  // Зберігаємо стан користувача як signal, щоб показати реактивні оновлення у шаблоні
  protected readonly user = signal({
    name: 'Alex',
    isActive: true,
    avatarUrl: 'https://placehold.co/80x80?text=A'
  });

  toggleActive() {
    const current = this.user();
    this.user.set({ ...current, isActive: !current.isActive });
  }
}
