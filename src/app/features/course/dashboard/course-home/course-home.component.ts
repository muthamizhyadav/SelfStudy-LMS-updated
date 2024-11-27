import { Component } from '@angular/core';
import { FooterComponent } from "../../../../shared/parts/footer/footer.component";
import { HeaderComponent } from '../../../../shared/parts/header/header.component';
import { SidebarComponent } from '../../../../shared/parts/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { EnrolledCourseDetailComponent } from "../enrolled-course-detail/enrolled-course-detail.component";
import { ResumeLearningComponent } from '../resume-learning/resume-learning.component';
import { RecommendedCoursesComponent } from "../recommended-courses/recommended-courses.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-home',
  standalone: true,
  imports: [FooterComponent, ResumeLearningComponent,CommonModule, HeaderComponent, SidebarComponent, RouterModule, EnrolledCourseDetailComponent, RecommendedCoursesComponent],
  templateUrl: './course-home.component.html',
  styleUrl: './course-home.component.css'
})
export class CourseHomeComponent {

  showPopup = true;

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
