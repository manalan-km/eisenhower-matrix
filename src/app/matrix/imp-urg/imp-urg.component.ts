import { Component } from '@angular/core';
import { Priority, Task } from '../../../model/Task';
import { TaskService } from '../../service/task.service';
import { PRIORITY } from '../../constants/constants';

@Component({
  selector: 'app-imp-urg',
  standalone: true,
  imports: [],
  templateUrl: './imp-urg.component.html',
  styleUrl: './imp-urg.component.css'
})
export class ImpUrgComponent {
  
  //IU = Important and Urgent
  IUTasks: Task[]
  priority :Priority = "imp-urgent"  
  meow

  constructor (private taskService : TaskService) { 
    this.IUTasks = this.taskService.getTasksByPriority(this.priority)
    this.meow = [1,2,3,4,5]
    console.log(this.IUTasks)
  }

}
