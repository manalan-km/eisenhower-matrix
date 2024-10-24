import { Injectable } from '@angular/core';
import { Task } from '../../model/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private TaskId
  private tasks : Task[]
  constructor() { 
    this.tasks = [
      { id: 1, TaskContent: "task 1", TaskPriority: "imp-not-urgent" },
      { id: 2, TaskContent: "task 2", TaskPriority: "imp-urgent" },
      { id: 3, TaskContent: "task 3", TaskPriority: "not-imp-not-urgent" },
      { id: 4, TaskContent: "task 4", TaskPriority: "not-imp-urgent" }
  ];
  this.TaskId = this.tasks.length
  }

  createTaskId() { 
    return this.TaskId = this.TaskId + 1
  }

  addTasks(task:Partial<Task>) {
    const newTask:Task = { 
      id: this.createTaskId(),
      TaskContent : task.TaskContent!,
      TaskPriority: task.TaskPriority!,
    }
    this.tasks.push(newTask)
    console.log(this.tasks)
  }
  
  getTasks() {
    return this.tasks
  }

  getTask(TaskId:number) { 
    console.log(this.tasks[TaskId -1])
    return this.tasks[TaskId - 1]
    
  }

  updateTasks(task:Partial<Task>, taskId:number) {
    const index = taskId - 1
    this.tasks[index].TaskContent = task.TaskContent!
    this.tasks[index].TaskPriority = task.TaskPriority!
  }

  removeTask(taskId:number) { 
    this.tasks = this.tasks.filter((task)=>{
      return task.id !== taskId
    })
    console.log(this.tasks)
  }
}
