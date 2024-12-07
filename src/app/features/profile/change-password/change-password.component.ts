import { Component } from '@angular/core';
import { HeaderComponent } from "../../../shared/parts/header/header.component";
import { SidebarComponent } from "../../../shared/parts/sidebar/sidebar.component";
import { FooterComponent } from "../../../shared/parts/footer/footer.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [HeaderComponent, SidebarComponent, FooterComponent,CommonModule],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.css'
})
export class ChangePasswordComponent {
  showPopup = false;

  handleConfirm() {
    console.log('Confirmed!');
    this.showPopup = false;
  }

  handleCancel() {
    console.log('Cancelled!');
    this.showPopup = false;
  }

  openPopup() {
    this.showPopup = true
  }

  showPopup2 = false;

  handleConfirm2() {
    console.log('Confirmed!');
    this.showPopup2 = false;
  }

  handleCancel2() {
    console.log('Cancelled!');
    this.showPopup2 = false;
  }

  openPopup2() {
    this.showPopup2 = true
  }

}
