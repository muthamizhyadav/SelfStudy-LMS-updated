import { Component } from '@angular/core';
import { FooterComponent } from "../../../shared/parts/footer/footer.component";
import { SidebarComponent } from "../../../shared/parts/sidebar/sidebar.component";
import { HeaderComponent } from "../../../shared/parts/header/header.component";

@Component({
  selector: 'app-payment-details',
  standalone: true,
  imports: [FooterComponent, SidebarComponent, HeaderComponent],
  templateUrl: './payment-details.component.html',
  styleUrl: './payment-details.component.css'
})
export class PaymentDetailsComponent {

}
