import { Component } from '@angular/core';
import { SidebarComponent } from "../../../../shared/parts/sidebar/sidebar.component";
import { HeaderComponent } from "../../../../shared/parts/header/header.component";
import { FooterComponent } from "../../../../shared/parts/footer/footer.component";
import { NotesAndObservationsComponent } from "../../module-unit-details/notes-and-observations/notes-and-observations.component";

@Component({
  selector: 'app-view-quiz-result',
  standalone: true,
  imports: [SidebarComponent, HeaderComponent, FooterComponent, NotesAndObservationsComponent],
  templateUrl: './view-quiz-result.component.html',
  styleUrl: './view-quiz-result.component.css'
})
export class ViewQuizResultComponent {

}
