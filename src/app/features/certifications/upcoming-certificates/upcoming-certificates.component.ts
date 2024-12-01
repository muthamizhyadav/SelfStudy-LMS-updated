import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../../shared/parts/header/header.component";
import { SidebarComponent } from "../../../shared/parts/sidebar/sidebar.component";
import { FooterComponent } from "../../../shared/parts/footer/footer.component";
import { FeaturedCoursesComponent } from "../../reusable-components/featured-courses/featured-courses.component";
import { RouterModule } from '@angular/router';
import { AccordianComponent } from "../../../shared/parts/accordian/accordian.component";

@Component({
  selector: 'app-upcoming-certificates',
  standalone: true,
  imports: [HeaderComponent, RouterModule, SidebarComponent, FooterComponent, FeaturedCoursesComponent, AccordianComponent],
  templateUrl: './upcoming-certificates.component.html',
  styleUrl: './upcoming-certificates.component.css'
})
export class UpcomingCertificatesComponent implements OnInit {
  ngOnInit(): void {
  console.log('in up');
  
  }

}
