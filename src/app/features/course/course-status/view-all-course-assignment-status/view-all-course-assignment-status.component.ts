import { Component } from '@angular/core';
import { HeaderComponent } from "../../../../shared/parts/header/header.component";
import { SidebarComponent } from "../../../../shared/parts/sidebar/sidebar.component";
import { AccordianComponent } from "../../../../shared/parts/accordian/accordian.component";
import { FooterComponent } from "../../../../shared/parts/footer/footer.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-view-all-course-assignment-status',
  standalone: true,
  imports: [HeaderComponent, SidebarComponent, AccordianComponent, FooterComponent,RouterModule],
  templateUrl: './view-all-course-assignment-status.component.html',
  styleUrl: './view-all-course-assignment-status.component.css'
})
export class ViewAllCourseAssignmentStatusComponent {

}
