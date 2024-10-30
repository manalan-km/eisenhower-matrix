import { Component } from '@angular/core';
import { Priority, Task } from '../../../model/Task';
import { TaskService } from '../../service/task.service';
import { PRIORITY } from '../../constants/constants';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-imp-urg',
  standalone: true,
  imports: [],
  templateUrl: './imp-urg.component.html',
  styleUrl: './imp-urg.component.css'
})
export class ImpUrgComponent {
  
  //IU = Important and Urgent
  IUTasks: Task[] = []
  priority :Priority = "imp-urgent" 
  task$:Observable<Task[]>
  private TASK_PRIORITY : Priority = 'imp-urgent'

  constructor (private taskService : TaskService) { 
    this.task$ = this.taskService.getTaskObservable()

    this.task$.subscribe(tasks => { 
      this.IUTasks = tasks.filter(
        (task)=> {
          return task.TaskPriority === this.TASK_PRIORITY
        }
      )
    } )
  }

}
