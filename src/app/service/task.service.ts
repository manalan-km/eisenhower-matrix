import { Injectable } from '@angular/core';
import { Task } from '../../model/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks : Task[]
  constructor() { 
    this.tasks = [
      {
        TaskContent: "task 1",
        TaskPriority: "imp-not-urgent"
      },
      {
        TaskContent: "task 2",
        TaskPriority: "imp-urgent"
      }
      ,
      {
        TaskContent: "task 3",
        TaskPriority: "not-imp-not-urgent"
      },
      { 
        TaskContent: "task4",
        TaskPriority: "not-imp-urgent"
      }
    ]
  }

  addTasks(newTask:Task) { 
    this.tasks.push(newTask)
  }
  
  getTask() {
    return this.tasks
  }
}
