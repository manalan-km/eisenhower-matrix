import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Priority, Task } from '../../model/Task';
import { TaskService } from '../service/task.service';
import { PRIORITY } from '../constants/constants';

@Component({
  selector: 'app-task-edit',
  standalone: true,
  imports: [RouterModule, CommonModule, ReactiveFormsModule],
  templateUrl: './task-edit.component.html',
  styleUrl: './task-edit.component.css',
})
export class TaskEditComponent {
  id: number;
  taskPriorities;
  selectedTask: Task;
  taskEditForm!: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private taskService: TaskService,
  ) {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.selectedTask = this.taskService.getTask(this.id)!;

    console.log(this.selectedTask);

    this.taskPriorities = PRIORITY;

    this.taskEditForm = new FormGroup({
      task: new FormControl('', [Validators.required]),
    });

    this.taskEditForm.setValue({ task: this.selectedTask.TaskContent });
  }

  editTask(task: HTMLInputElement, priority: HTMLSelectElement) {
    const edittedTask = {
      TaskContent: task.value,
      TaskPriority: priority.value as Priority,
    };

    this.taskService.updateTasks(edittedTask, this.id);
  }
}
