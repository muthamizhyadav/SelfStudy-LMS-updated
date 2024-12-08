import { Component } from '@angular/core';
import { FooterComponent } from "../../../../shared/parts/footer/footer.component";
import { SidebarComponent } from "../../../../shared/parts/sidebar/sidebar.component";
import { HeaderComponent } from "../../../../shared/parts/header/header.component";
import { FeaturedCoursesComponent } from "../../../reusable-components/featured-courses/featured-courses.component";
import { NotesAndObservationsComponent } from "../../module-unit-details/notes-and-observations/notes-and-observations.component";

@Component({
  selector: 'app-purchase-combo-module-list',
  standalone: true,
  imports: [FooterComponent, SidebarComponent, HeaderComponent, FeaturedCoursesComponent, NotesAndObservationsComponent],
  templateUrl: './purchase-combo-module-list.component.html',
  styleUrl: './purchase-combo-module-list.component.css'
})
export class PurchaseComboModuleListComponent {

}
