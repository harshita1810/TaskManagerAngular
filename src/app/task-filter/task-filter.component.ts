import { Component } from '@angular/core';
import { Task, TaskService } from '../task.service';

@Component({
  selector: 'app-task-filter',
  templateUrl: './task-filter.component.html',
  styleUrls: ['./task-filter.component.css']
})
export class TaskFilterComponent {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {
    this.tasks = this.taskService.getTasks();
  }

  search(query: string): void {
    this.tasks = this.taskService.getTasks().filter(task =>
      task.title.toLowerCase().includes(query.toLowerCase())
    );
  }

  sortDate(order: string): void {
    this.tasks = this.taskService.getTasks().sort((a, b) => {
      const dateA = new Date(a.dueDate).getTime();
      const dateB = new Date(b.dueDate).getTime();
      return order === 'asc' ? dateA - dateB : dateB - dateA;
    });
  }
}
