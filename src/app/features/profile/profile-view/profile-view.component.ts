import { Component } from '@angular/core';
import { HeaderComponent } from "../../../shared/parts/header/header.component";
import { SidebarComponent } from "../../../shared/parts/sidebar/sidebar.component";
import { FooterComponent } from "../../../shared/parts/footer/footer.component";
import { BasicPersonalInfoComponent } from "../basic-personal-info/basic-personal-info.component";
import { AcademicHistoryComponent } from "../academic-history/academic-history.component";
import { ProfessionalHistoryComponent } from "../professional-history/professional-history.component";

@Component({
  selector: 'app-profile-view',
  standalone: true,
  imports: [HeaderComponent, SidebarComponent, FooterComponent, BasicPersonalInfoComponent, AcademicHistoryComponent, ProfessionalHistoryComponent],
  templateUrl: './profile-view.component.html',
  styleUrl: './profile-view.component.css'
})
export class ProfileViewComponent {

}
