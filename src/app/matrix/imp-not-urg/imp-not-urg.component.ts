import { Component } from '@angular/core';

@Component({
  selector: 'app-imp-not-urg',
  standalone: true,
  imports: [],
  templateUrl: './imp-not-urg.component.html',
  styleUrl: './imp-not-urg.component.css'
})
export class ImpNotUrgComponent {
  meow
  constructor () { 
    this.meow = [1,2,3,4,5]
  }
}
