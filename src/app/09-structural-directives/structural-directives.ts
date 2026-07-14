
import { CommonModule } from "@angular/common";
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  imports: [CommonModule],
  templateUrl: './structural-directives.html',
  styleUrl: './structural-directives.css',
})
export class StructuralDirectives {
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
