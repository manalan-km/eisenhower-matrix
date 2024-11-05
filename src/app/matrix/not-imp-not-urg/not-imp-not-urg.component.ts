import { Component } from '@angular/core';
import { Priority, Task } from '../../../model/Task';
import { Observable } from 'rxjs';
import { TaskService } from '../../service/task.service';
import { sortByPriority } from '../../../utils/task';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-not-imp-not-urg',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './not-imp-not-urg.component.html',
  styleUrl: './not-imp-not-urg.component.css',
})
export class NotImpNotUrgComponent {
  //IU = Important and Urgent
  NINUTasks: Task[] = [];
  priority: Priority = 'not-imp-not-urgent';
  task$: Observable<Task[]>;
  private TASK_PRIORITY: Priority = 'not-imp-not-urgent';

  constructor(private taskService: TaskService) {
    this.task$ = this.taskService.getTaskObservable();

    this.task$.subscribe((tasks) => {
      this.NINUTasks = sortByPriority(tasks, this.TASK_PRIORITY);
    });
  }

  removeTask(taskId: number) {
    this.taskService.removeTask(taskId);
  }
}
