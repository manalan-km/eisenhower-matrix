import { Component } from '@angular/core';
import { ImpUrgComponent } from './imp-urg/imp-urg.component';

@Component({
  selector: 'app-matrix',
  standalone: true,
  imports: [ImpUrgComponent],
  templateUrl: './matrix.component.html',
  styleUrl: './matrix.component.css',
})
export class MatrixComponent {}
