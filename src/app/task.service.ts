import { Injectable } from '@angular/core';

export interface Task {
  title: string;
  description: string;
  dueDate: string;
  priority: string;
  status: string;
  id: number;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = JSON.parse(localStorage.getItem('mynotes') || '[]');

  constructor() {}

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(task: Task): void {
    this.tasks.push(task);
    localStorage.setItem('mynotes', JSON.stringify(this.tasks));
  }

  updateTask(id: number, updatedTask: Task): void {
    const index = this.tasks.findIndex(task => task.id === id);
    if (index > -1) {
      this.tasks[index] = updatedTask;
      localStorage.setItem('mynotes', JSON.stringify(this.tasks));
    }
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
    localStorage.setItem('mynotes', JSON.stringify(this.tasks));
  }
}
