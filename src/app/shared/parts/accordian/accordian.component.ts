import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordian',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accordian.component.html',
  styleUrl: './accordian.component.scss'
})
export class AccordianComponent {

  @Input() title1: string = '';
  @Input() title: string = '';
  @Input() getClass: string = '';

  isOpen = false;

  toggleAccordion() {
    this.isOpen = !this.isOpen;
  }
  addClass:any=""
}
