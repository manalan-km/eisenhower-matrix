import { Component } from '@angular/core';
import { Priority, Task } from '../../../model/Task';
import { Observable } from 'rxjs';
import { TaskService } from '../../service/task.service';
import { sortByPriority } from '../../../utils/task';

@Component({
  selector: 'app-imp-not-urg',
  standalone: true,
  imports: [],
  templateUrl: './imp-not-urg.component.html',
  styleUrl: './imp-not-urg.component.css'
})
export class ImpNotUrgComponent {
  //INU = Important and Urgent
  INUTasks: Task[] = []
  priority :Priority = "imp-urgent" 
  task$:Observable<Task[]>
  private TASK_PRIORITY : Priority = 'imp-not-urgent'

  constructor (private taskService : TaskService) { 
    this.task$ = this.taskService.getTaskObservable()

    this.task$.subscribe(tasks => { 
      this.INUTasks = sortByPriority(tasks,this.TASK_PRIORITY)
    } )
  }
}
