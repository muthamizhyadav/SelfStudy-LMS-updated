import { Component } from '@angular/core';
import { HeaderComponent } from "../../../../shared/parts/header/header.component";
import { SidebarComponent } from "../../../../shared/parts/sidebar/sidebar.component";
import { FooterComponent } from "../../../../shared/parts/footer/footer.component";
import { NotesAndObservationsComponent } from "../../module-unit-details/notes-and-observations/notes-and-observations.component";

@Component({
  selector: 'app-assessment-submission',
  standalone: true,
  imports: [HeaderComponent, SidebarComponent, FooterComponent, NotesAndObservationsComponent],
  templateUrl: './assessment-submission.component.html',
  styleUrl: './assessment-submission.component.css'
})
export class AssessmentSubmissionComponent {

}
