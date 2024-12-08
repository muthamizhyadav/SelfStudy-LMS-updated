import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-recommended-courses',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './recommended-courses.component.html',
  styleUrl: './recommended-courses.component.css'
})
export class RecommendedCoursesComponent {
  showPopup = false;
  handleConfirm() {
    console.log('Confirmed!');
    this.showPopup = false;
  }

  handleCancel() {
    console.log('Cancelled!');
    this.showPopup = false;
  }

  openPopup() {
    this.showPopup = true
  }
}
