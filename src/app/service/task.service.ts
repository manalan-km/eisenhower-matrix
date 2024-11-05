import { Injectable } from '@angular/core';
import { Task, TaskStatus } from '../../model/Task';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private TaskId;
  private tasks: Task[];
  private taskSubject: BehaviorSubject<Task[]>;

  constructor() {
    this.tasks = [];

    this.taskSubject = new BehaviorSubject<Task[]>(this.tasks);
    this.TaskId = this.tasks.length;
  }

  private createTaskId() {
    return (this.TaskId = this.TaskId + 1);
  }

  private sendUpdate() {
    this.taskSubject.next(this.tasks);
  }

  addTasks(task: Partial<Task>) {
    const newTask: Task = {
      id: this.createTaskId(),
      TaskContent: task.TaskContent!,
      TaskPriority: task.TaskPriority!,
      TaskStatus: 'in-progress',
    };

    this.tasks.push(newTask);
    this.sendUpdate();
    console.log(this.tasks);
  }

  getTaskObservable() {
    const taskObservable = this.taskSubject.asObservable();
    return taskObservable;
  }

  getTaskById(TaskId: number) {
    console.log(typeof TaskId);
    const task = this.tasks.find((task) => task.id === TaskId);
    console.log(task);
    return task;
  }

  getTaskIndex(TaskId: number): number {
    const index = this.tasks.findIndex((task) => task.id === TaskId);
    return index;
  }

  getTaskStatus(taskId: number) {
    const index = this.getTaskIndex(taskId);
    return this.tasks[index].TaskStatus;
  }

  updateTasks(task: Partial<Task>, taskId: number) {
    const index = this.getTaskIndex(taskId);
    this.tasks[index].TaskContent = task.TaskContent!;
    this.tasks[index].TaskPriority = task.TaskPriority!;

    this.sendUpdate();
  }

  changeTaskStatus(taskId: number, taskStatus: TaskStatus) {
    const index = this.getTaskIndex(taskId);
    this.tasks[index].TaskStatus = taskStatus;

    this.sendUpdate();
  }

  removeTask(taskId: number) {
    this.tasks = this.tasks.filter((task) => {
      return task.id !== taskId;
    });

    this.sendUpdate();
    console.log(this.tasks);
  }
}
