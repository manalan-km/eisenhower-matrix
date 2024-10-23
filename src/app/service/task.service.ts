import { Injectable } from '@angular/core';
import { Task } from '../../model/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private TaskId = 0
  private tasks : Task[]
  constructor() { 
    this.tasks = []
  }

  createTaskId() { 
    return this.TaskId = this.TaskId + 1
  }

  addTasks(task:Partial<Task>) {
    const newTask:Task = { 
      TaskContent : task.TaskContent!,
      TaskPriority: task.TaskPriority!,
      id: this.createTaskId()
    }
    this.tasks.push(newTask)
    console.log(this.tasks)
  }
  
  getTask() {
    return this.tasks
  }
}
