import { Component } from '@angular/core';
import { FooterComponent } from "../../../shared/parts/footer/footer.component";
import { HeaderComponent } from "../../../shared/parts/header/header.component";
import { SidebarComponent } from "../../../shared/parts/sidebar/sidebar.component";
import { UserDetailsComponent } from "../user-details/user-details.component";
import { EventCalendarComponent } from "../event-calendar/event-calendar.component";
import { CourseProgressComponent } from '../course-progress/course-progress.component';
import { AcademicJourneyComponent } from "../academic-journey/academic-journey.component";
import { UpcomingMilestoneComponent } from "../upcoming-milestone/upcoming-milestone.component";
import { UpcomingEventsComponent } from "../upcoming-events/upcoming-events.component";

@Component({
  selector: 'app-view-dashboard',
  standalone: true,
  imports: [FooterComponent, HeaderComponent, SidebarComponent, UserDetailsComponent, CourseProgressComponent, EventCalendarComponent, AcademicJourneyComponent, UpcomingMilestoneComponent, UpcomingEventsComponent],
  templateUrl: './view-dashboard.component.html',
  styleUrl: './view-dashboard.component.css'
})
export class ViewDashboardComponent {

}
