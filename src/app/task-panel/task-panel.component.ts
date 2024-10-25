import { Component } from '@angular/core';
import { TaskCreatorComponent } from "./task-creator/task-creator.component";
import { TaskBoardComponent } from "./task-board/task-board.component";

@Component({
  selector: 'app-task-panel',
  standalone: true,
  imports: [TaskCreatorComponent, TaskBoardComponent],
  templateUrl: './task-panel.component.html',
  styleUrl: './task-panel.component.css'
})

export class TaskPanelComponent {

}
