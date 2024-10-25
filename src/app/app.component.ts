import { Component } from '@angular/core';
import { TaskPanelComponent } from "./task-panel/task-panel.component";
import { RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TaskPanelComponent, RouterModule,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
