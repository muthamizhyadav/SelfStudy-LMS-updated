import { Component } from '@angular/core';
import { HeaderComponent } from "../../../../shared/parts/header/header.component";
import { SidebarComponent } from "../../../../shared/parts/sidebar/sidebar.component";
import { FooterComponent } from "../../../../shared/parts/footer/footer.component";
import { NotesAndObservationsComponent } from "../../module-unit-details/notes-and-observations/notes-and-observations.component";

@Component({
  selector: 'app-course-enrollment',
  standalone: true,
  imports: [HeaderComponent, SidebarComponent, FooterComponent, NotesAndObservationsComponent],
  templateUrl: './course-enrollment.component.html',
  styleUrl: './course-enrollment.component.css'
})
export class CourseEnrollmentComponent {

}
