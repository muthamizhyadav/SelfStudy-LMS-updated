import { Component } from '@angular/core';
import { HeaderComponent } from "../../../../shared/parts/header/header.component";
import { SidebarComponent } from "../../../../shared/parts/sidebar/sidebar.component";
import { FooterComponent } from "../../../../shared/parts/footer/footer.component";
import { NotesAndObservationsComponent } from "../../module-unit-details/notes-and-observations/notes-and-observations.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-assessment-submission',
  standalone: true,
  imports: [HeaderComponent, SidebarComponent, FooterComponent, NotesAndObservationsComponent,CommonModule],
  templateUrl: './assessment-submission.component.html',
  styleUrl: './assessment-submission.component.css'
})
export class AssessmentSubmissionComponent {
  showPopup2 = false;

  handleCancel2() {
    console.log('Cancelled!');
    this.showPopup2 = false;
  }

  openPopup2() {
    this.showPopup2 = true
  }

  showPopup = false;


  handleCancel() {
    console.log('Cancelled!');
    this.showPopup = false;
  }

  openPopup() {
    this.showPopup = true
  }

}
