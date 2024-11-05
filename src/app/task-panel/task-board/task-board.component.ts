import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../service/task.service';
import { Task, TaskStatus } from '../../../model/Task';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-task-board',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './task-board.component.html',
  styleUrl: './task-board.component.css',
})
export class TaskBoardComponent {
  createdTasks: Task[] = [];
  task$: Observable<Task[]>;

  constructor(private taskService: TaskService) {
    this.task$ = taskService.getTaskObservable();
    this.task$.subscribe((tasks) => (this.createdTasks = tasks));
  }

  removeTask(id: number) {
    this.taskService.removeTask(id);
  }

  markAsCompleted(taskId: number) {
    const newTaskStatus: TaskStatus = 'completed';
    this.taskService.changeTaskStatus(taskId, newTaskStatus);
  }

  markAsInProgress(taskId: number) {
    const newTaskStatus: TaskStatus = 'in-progress';
    this.taskService.changeTaskStatus(taskId, newTaskStatus);
  }

  isTaskDone(taskId: number) {
    return this.taskService.getTaskStatus(taskId) === 'completed';
  }
}
