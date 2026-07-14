import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-control-flow-for',
  imports: [],
  templateUrl: './control-flow-for.html',
  styleUrl: './control-flow-for.css',
})
export class ControlFlowFor {
  protected readonly tasks = signal<Task[]>([
    { id: 1, title: 'Купити продуктів', priority: 'medium', completed: false },
    { id: 2, title: 'Написати звіт', priority: 'high', completed: false },
    { id: 3, title: 'Вигуляти собаку', priority: 'low', completed: true },
    { id: 4, title: 'Вивчити Angular', priority: 'high', completed: false },
    { id: 5, title: 'Оновити CV', priority: 'high', completed: false },
  ]);
  protected readonly emptyTasks = signal<Task[] | undefined>(undefined);

  addTasks() {
    this.tasks.update(tasks => [
      ...tasks,
      { id: tasks.length + 1, title: 'generated task', priority: 'low', completed: false } as Task
    ]);
  }
}

interface Task {
  id: number;
  title: string;
  priority: 'low' | 'medium' | 'high';
  completed: boolean;
}

