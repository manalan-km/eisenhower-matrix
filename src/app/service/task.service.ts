import { Injectable } from '@angular/core';
import { Task } from '../../model/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private TaskId = 0
  private tasks : Task[]
  constructor() { 
    this.tasks = [
      {id: 1,
        TaskContent: "task 1",
        TaskPriority: "imp-not-urgent"
      },
      {id: 2,
        TaskContent: "task 2",
        TaskPriority: "imp-urgent"
      }
      ,
      {id: 3,
        TaskContent: "task 3",
        TaskPriority: "not-imp-not-urgent"
      },
      { id: 4,
        TaskContent: "task4",
        TaskPriority: "not-imp-urgent"
      }
    ]
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
