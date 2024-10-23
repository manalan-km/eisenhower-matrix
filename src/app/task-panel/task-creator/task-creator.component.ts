import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../service/task.service';
import { Priority, Task } from '../../../model/Task';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-creator',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './task-creator.component.html',
  styleUrl: './task-creator.component.css'
})
export class TaskCreatorComponent implements OnInit {

  taskForm!: FormGroup

  constructor(private taskService: TaskService){}
  addNewTask(task:HTMLInputElement,priority:HTMLSelectElement) {
    const newTask : Task = {
      TaskContent: task.value,
      TaskPriority: priority.value as Priority
    } 
    this.taskService.addTasks( newTask )
    
  }
  ngOnInit(): void {
    this.taskForm = new FormGroup({ 
      task: new FormControl('', [Validators.required])
    })
  }

}
