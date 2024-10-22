import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../service/task.service';
import { Task } from '../../../model/Task';

@Component({
  selector: 'app-task-board',
  standalone: true,
  imports: [],
  templateUrl: './task-board.component.html',
  styleUrl: './task-board.component.css'
})
export class TaskBoardComponent implements OnInit {
  createdTasks: Task[] = []

  constructor (private taskService : TaskService) { 
  }

  ngOnInit(): void {
    this.createdTasks = this.taskService.getTask()
  }
}
