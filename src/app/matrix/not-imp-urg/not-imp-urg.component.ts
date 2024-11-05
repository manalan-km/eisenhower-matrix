import { Component } from '@angular/core';
import { Priority, Task } from '../../../model/Task';
import { Observable } from 'rxjs';
import { TaskService } from '../../service/task.service';
import { sortByPriority } from '../../../utils/task';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-not-imp-urg',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './not-imp-urg.component.html',
  styleUrl: './not-imp-urg.component.css',
})
export class NotImpUrgComponent {
  //IU = Important and Urgent
  NIUTasks: Task[] = [];
  priority: Priority = 'imp-urgent';
  task$: Observable<Task[]>;
  private TASK_PRIORITY: Priority = 'not-imp-urgent';

  constructor(private taskService: TaskService) {
    this.task$ = this.taskService.getTaskObservable();

    this.task$.subscribe((tasks) => {
      this.NIUTasks = sortByPriority(tasks, this.TASK_PRIORITY);
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
