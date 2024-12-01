import { Component } from '@angular/core';
import { HeaderComponent } from "../../../shared/parts/header/header.component";
import { SidebarComponent } from "../../../shared/parts/sidebar/sidebar.component";
import { FooterComponent } from "../../../shared/parts/footer/footer.component";

@Component({
  selector: 'app-feedback-submit-form',
  standalone: true,
  imports: [HeaderComponent, SidebarComponent, FooterComponent],
  templateUrl: './feedback-submit-form.component.html',
  styleUrl: './feedback-submit-form.component.css'
})
export class FeedbackSubmitFormComponent {

}
