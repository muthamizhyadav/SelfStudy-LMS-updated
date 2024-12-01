import { Component } from '@angular/core';
import { FooterComponent } from "../../../shared/parts/footer/footer.component";
import { SidebarComponent } from "../../../shared/parts/sidebar/sidebar.component";
import { HeaderComponent } from "../../../shared/parts/header/header.component";
import { AccordianComponent } from "../../../shared/parts/accordian/accordian.component";
import { RouterModule } from '@angular/router';
import { FeaturedCoursesComponent } from "../../reusable-components/featured-courses/featured-courses.component";

@Component({
  selector: 'app-earned-certificates',
  standalone: true,
  imports: [FooterComponent, RouterModule, SidebarComponent, HeaderComponent, AccordianComponent, FeaturedCoursesComponent],
  templateUrl: './earned-certificates.component.html',
  styleUrl: './earned-certificates.component.css'
})
export class EarnedCertificatesComponent {

}
