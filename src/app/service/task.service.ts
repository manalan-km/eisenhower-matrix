import { Injectable } from '@angular/core';
import { Task } from '../../model/Task';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private TaskId
  private tasks : Task[]
  private taskSubject  :BehaviorSubject<Task[]>
  constructor() { 
    this.tasks = [
      { id: 1, TaskContent: "task 1", TaskPriority: "imp-not-urgent" },
      { id: 2, TaskContent: "task 2", TaskPriority: "imp-urgent" },
      { id: 3, TaskContent: "task 3", TaskPriority: "not-imp-not-urgent" },
      { id: 4, TaskContent: "task 4", TaskPriority: "not-imp-urgent" }
  ];

    this.taskSubject  = new BehaviorSubject<Task[]>(this.tasks)
    this.TaskId = this.tasks.length
  }

  private createTaskId() { 
    return this.TaskId = this.TaskId + 1
  }

  private sendUpdate() { 
    this.taskSubject.next(this.tasks)
  }

  addTasks(task:Partial<Task>) {
    const newTask:Task = { 
      id: this.createTaskId(),
      TaskContent : task.TaskContent!,
      TaskPriority: task.TaskPriority!,
    }

    this.tasks.push(newTask)
    this.sendUpdate()
    console.log(this.tasks)
  }
  
  getTaskObservable() {
    const taskObservable = this.taskSubject.asObservable()
    return taskObservable
  }

  getTaskById(TaskId:number) { 
    console.log(this.tasks[TaskId -1])
    return this.tasks[TaskId - 1]
  }

  updateTasks(task:Partial<Task>, taskId:number) {
    const index = taskId - 1
    this.tasks[index].TaskContent = task.TaskContent!
    this.tasks[index].TaskPriority = task.TaskPriority!

    this.sendUpdate()
    
  }

  removeTask(taskId:number) { 
    this.tasks = this.tasks.filter((task)=>{
      return task.id !== taskId
    })

    this.sendUpdate()
    console.log(this.tasks)
  }
}