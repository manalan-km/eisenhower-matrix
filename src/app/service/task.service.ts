import { Injectable } from '@angular/core';
import { Task } from '../../model/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks : Task[]
  constructor() { 
    this.tasks = []
  }

  addTasks(newTask:Task) { 
    this.tasks.push(newTask)
  }
  
  getTask() {
    return this.tasks
  }
}
