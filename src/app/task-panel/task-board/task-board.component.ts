import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../service/task.service';
import { Task } from '../../../model/Task';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-task-board',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './task-board.component.html',
  styleUrl: './task-board.component.css'
})
export class TaskBoardComponent implements OnInit {
  createdTasks: Task[] = []

  constructor (private taskService : TaskService) { 
  }

  ngOnInit(): void {
    this.createdTasks = this.taskService.getTasks()
  }

  getTasks() { 
    this.createdTasks = this.taskService.getTasks()
  }

  removeTask(id:number) { 
    this.taskService.removeTask(id)
    this.getTasks()
  }
}
