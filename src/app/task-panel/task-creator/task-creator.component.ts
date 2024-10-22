import { Component } from '@angular/core';
import { TaskService } from '../../service/task.service';
import { Priority, Task } from '../../../model/Task';

@Component({
  selector: 'app-task-creator',
  standalone: true,
  imports: [],
  templateUrl: './task-creator.component.html',
  styleUrl: './task-creator.component.css'
})
export class TaskCreatorComponent {

  constructor(private taskService: TaskService){}
  addNewTask(task:HTMLInputElement,priority:HTMLSelectElement) {
    const newTask : Task = {
      TaskContent: task.value,
      TaskPriority: priority.value as Priority
    } 
    this.taskService.addTasks( newTask )
  }

}
