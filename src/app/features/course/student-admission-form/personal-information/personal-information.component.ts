import { Component } from '@angular/core';
import { HeaderComponent } from "../../../../shared/parts/header/header.component";
import { SidebarComponent } from "../../../../shared/parts/sidebar/sidebar.component";
import { FooterComponent } from "../../../../shared/parts/footer/footer.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-personal-information',
  standalone: true,
  imports: [HeaderComponent, SidebarComponent, FooterComponent,RouterModule],
  templateUrl: './personal-information.component.html',
  styleUrl: './personal-information.component.css'
})
export class PersonalInformationComponent {

}
