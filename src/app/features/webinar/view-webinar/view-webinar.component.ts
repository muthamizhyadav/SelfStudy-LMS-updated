import { Component } from '@angular/core';
import { FooterComponent } from "../../../shared/parts/footer/footer.component";
import { SidebarComponent } from "../../../shared/parts/sidebar/sidebar.component";
import { HeaderComponent } from "../../../shared/parts/header/header.component";

@Component({
  selector: 'app-view-webinar',
  standalone: true,
  imports: [FooterComponent, SidebarComponent, HeaderComponent],
  templateUrl: './view-webinar.component.html',
  styleUrl: './view-webinar.component.css'
})
export class ViewWebinarComponent {

}
