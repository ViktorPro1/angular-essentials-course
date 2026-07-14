import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-control-flow-if',
  imports: [],
  templateUrl: './control-flow-if.html',
  styleUrl: './control-flow-if.css',
})
export class ControlFlowIf {
  protected readonly tasks = signal<Task[]>(new Array());
  protected readonly taskModel = signal<Task | undefined>(undefined);

  addTasks() {
    this.tasks.update(tasks => [
      ...tasks,
      { id: tasks.length + 1, title: '', priority: 'low', completed: false } as Task
    ]);

    // this.tasks.update(tasks => {
    //   let t = { id: tasks.length + 1, title: '', priority: 'low', completed: false };
    //   tasks.push(t as Task);
    //   return tasks;
    // }
    //);

    this.taskModel.set({ id: this.tasks().length + 1, title: 'Згенерована задача', priority: 'low', completed: false })
  }
}

interface Task {
  id: number;
  title: string;
  priority: 'low' | 'medium' | 'high';
  completed: boolean;
}
