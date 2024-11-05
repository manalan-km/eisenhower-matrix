import { Component } from '@angular/core';
import { Priority, Task } from '../../../model/Task';
import { Observable } from 'rxjs';
import { TaskService } from '../../service/task.service';
import { sortByPriority } from '../../../utils/task';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-imp-not-urg',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './imp-not-urg.component.html',
  styleUrl: './imp-not-urg.component.css',
})
export class ImpNotUrgComponent {
  //INU = Important and Urgent
  INUTasks: Task[] = [];
  priority: Priority = 'imp-urgent';
  task$: Observable<Task[]>;
  private TASK_PRIORITY: Priority = 'imp-not-urgent';
  private isDone = false;

  constructor(private taskService: TaskService) {
    this.task$ = this.taskService.getTaskObservable();

    this.task$.subscribe((tasks) => {
      this.INUTasks = sortByPriority(tasks, this.TASK_PRIORITY);
    });
  }

  removeTask(taskId: number) {
    this.taskService.removeTask(taskId);
  }

  markAsCompleted(taskId: number) {
    this.taskService.changeTaskStatus(taskId, 'completed');
  }

  markAsInProgress(taskId: number) {
    this.taskService.changeTaskStatus(taskId, 'in-progress');
  }

  isTaskDone(taskId: number) {
    return this.taskService.getTaskStatus(taskId) === 'completed';
  }
}
