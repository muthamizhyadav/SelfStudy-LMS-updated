import { Component } from '@angular/core';
import { FooterComponent } from "../../../shared/parts/footer/footer.component";
import { SidebarComponent } from "../../../shared/parts/sidebar/sidebar.component";
import { HeaderComponent } from "../../../shared/parts/header/header.component";

@Component({
  selector: 'app-refer-form-submit',
  standalone: true,
  imports: [FooterComponent, SidebarComponent, HeaderComponent],
  templateUrl: './refer-form-submit.component.html',
  styleUrl: './refer-form-submit.component.css'
})
export class ReferFormSubmitComponent {

}
