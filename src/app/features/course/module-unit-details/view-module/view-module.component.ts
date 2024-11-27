import { Component } from '@angular/core';
import { FooterComponent } from "../../../../shared/parts/footer/footer.component";
import { HeaderComponent } from "../../../../shared/parts/header/header.component";
import { SidebarComponent } from "../../../../shared/parts/sidebar/sidebar.component";
import { NotesAndObservationsComponent } from "../notes-and-observations/notes-and-observations.component";
import { OverviewComponent } from "../../course-unit-detail/overview/overview.component";
import { EssentialReadingComponent } from "../../course-unit-detail/essential-reading/essential-reading.component";
import { AssignmentStatusComponent } from "../../course-unit-detail/assignment-status/assignment-status.component";
import { ModuleComponent } from "../../course-unit-detail/module/module.component";

@Component({
  selector: 'app-view-module',
  standalone: true,
  imports: [FooterComponent, HeaderComponent, SidebarComponent, NotesAndObservationsComponent, OverviewComponent, EssentialReadingComponent, AssignmentStatusComponent, ModuleComponent],
  templateUrl: './view-module.component.html',
  styleUrl: './view-module.component.css'
})
export class ViewModuleComponent {
  tab:any ='Overview'
   titles=['Overview','Essential Reading','Assignment Status','Certificates']
  activeTitle:any = 'Diplomas'
  changeTab(v:any){
    this.tab = v
  }
}
