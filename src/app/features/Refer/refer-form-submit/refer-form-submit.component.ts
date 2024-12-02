import { Component } from '@angular/core';
import { FooterComponent } from "../../../shared/parts/footer/footer.component";
import { SidebarComponent } from "../../../shared/parts/sidebar/sidebar.component";
import { HeaderComponent } from "../../../shared/parts/header/header.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-refer-form-submit',
  standalone: true,
  imports: [FooterComponent, SidebarComponent, HeaderComponent, CommonModule],
  templateUrl: './refer-form-submit.component.html',
  styleUrl: './refer-form-submit.component.css'
})
export class ReferFormSubmitComponent {
  showPopup = false;
  showPopup2 = false
  handleCancel() {
    console.log('Cancelled!');
    this.showPopup = false;
  }

  openPopup() {
    this.showPopup = true
  }


  handleCancel2() {
    console.log('Cancelled!');
    this.showPopup2 = false;
  }

  openPopup2() {
    this.showPopup2 = true
  }

}
