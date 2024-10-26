import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../service/task.service';
import { Priority, Task } from '../../../model/Task';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PRIORITY } from '../../constants/constants';

@Component({
  selector: 'app-task-creator',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './task-creator.component.html',
  styleUrl: './task-creator.component.css',
})
export class TaskCreatorComponent implements OnInit {
  taskForm!: FormGroup;
  taskPriorities;
  constructor(private taskService: TaskService) {
    this.taskPriorities = PRIORITY;
  }

  ngOnInit(): void {
    this.taskForm = new FormGroup({
      task: new FormControl('', [Validators.required]),
    });
  }

  addNewTask(task: HTMLInputElement, priority: HTMLSelectElement) {
    const newTask = {
      TaskContent: task.value,
      TaskPriority: priority.value as Priority,
    };
    this.taskService.addTasks(newTask);

    this.clearTask(task, priority);
  }

  clearTask(task: HTMLInputElement, priority: HTMLSelectElement) {
    task.value = '';
    priority.value = 'no-priority';
  }
}
