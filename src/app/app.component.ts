import { Component } from '@angular/core';
import { TaskPanelComponent } from "./task-panel/task-panel.component";
import { RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';
import { MatrixComponent } from './matrix/matrix.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TaskPanelComponent, MatrixComponent, RouterModule,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
