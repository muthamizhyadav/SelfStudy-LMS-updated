import { Component } from '@angular/core';
import { HeaderComponent } from "../../../../shared/parts/header/header.component";
import { SidebarComponent } from "../../../../shared/parts/sidebar/sidebar.component";
import { FooterComponent } from "../../../../shared/parts/footer/footer.component";

@Component({
  selector: 'app-student-declaration',
  standalone: true,
  imports: [HeaderComponent, SidebarComponent, FooterComponent],
  templateUrl: './student-declaration.component.html',
  styleUrl: './student-declaration.component.css'
})
export class StudentDeclarationComponent {

}
