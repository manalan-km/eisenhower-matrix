import { Component } from '@angular/core';
import { ImpUrgComponent } from './imp-urg/imp-urg.component';
import { ImpNotUrgComponent } from './imp-not-urg/imp-not-urg.component';
import { NotImpUrgComponent } from './not-imp-urg/not-imp-urg.component';
import { NotImpNotUrgComponent } from './not-imp-not-urg/not-imp-not-urg.component';

@Component({
  selector: 'app-matrix',
  standalone: true,
  imports: [ImpUrgComponent, ImpNotUrgComponent, NotImpUrgComponent, NotImpNotUrgComponent],
  templateUrl: './matrix.component.html',
  styleUrl: './matrix.component.css'
})
export class MatrixComponent {

}
