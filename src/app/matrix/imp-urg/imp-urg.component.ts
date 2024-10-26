import { Component } from '@angular/core';

@Component({
  selector: 'app-imp-urg',
  standalone: true,
  imports: [],
  templateUrl: './imp-urg.component.html',
  styleUrl: './imp-urg.component.css'
})
export class ImpUrgComponent {
  meow
  constructor () { 
    this.meow = [1,2,3,4,5]
  }

}
