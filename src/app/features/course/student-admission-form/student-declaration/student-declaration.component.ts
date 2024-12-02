import { Component } from '@angular/core';
import { HeaderComponent } from "../../../../shared/parts/header/header.component";
import { SidebarComponent } from "../../../../shared/parts/sidebar/sidebar.component";
import { FooterComponent } from "../../../../shared/parts/footer/footer.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-declaration',
  standalone: true,
  imports: [HeaderComponent, SidebarComponent, FooterComponent, CommonModule],
  templateUrl: './student-declaration.component.html',
  styleUrl: './student-declaration.component.css'
})
export class StudentDeclarationComponent {
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
