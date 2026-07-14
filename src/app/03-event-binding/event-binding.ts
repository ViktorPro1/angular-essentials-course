import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  imports: [],
  templateUrl: './event-binding.html',
  styleUrl: './event-binding.css',
})
export class EventBinding {
  protected readonly randomValue = signal(Math.random());

  protected update() {
    this.randomValue.set(Math.random());
  }

  protected onEnterPress(event: Event) {
    (event.target as HTMLInputElement).value = "Enter pressed";
  }

  protected onCombinationPress(event: Event) {
    (event.target as HTMLInputElement).value = "Shift + A pressed";
  }
}
