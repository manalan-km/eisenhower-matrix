import { Component } from '@angular/core';
import { TaskPanelComponent } from "./task-panel/task-panel.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TaskPanelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
