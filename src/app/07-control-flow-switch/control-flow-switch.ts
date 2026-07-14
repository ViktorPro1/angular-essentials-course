import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-control-flow-switch',
  imports: [],
  templateUrl: './control-flow-switch.html',
  styleUrl: './control-flow-switch.css',
})
export class ControlFlowSwitch {
protected readonly tasks = signal<Task[]>([
    { id: 1, title: 'Купити продуктів', priority: 'medium', completed: false },
    { id: 2, title: 'Написати звіт', priority: 'high', completed: false },
    { id: 3, title: 'Вигуляти собаку', priority: 'low', completed: true },
    { id: 4, title: 'Вивчити Angular', priority: 'high', completed: false },
    { id: 5, title: 'Оновити CV', priority: 'high', completed: false },
  ]);
}

interface Task {
  id: number;
  title: string;
  priority: 'low' | 'medium' | 'high';
  completed: boolean;
}
