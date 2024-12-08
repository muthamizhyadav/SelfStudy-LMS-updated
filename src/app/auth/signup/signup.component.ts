import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  passowrdShow: boolean = true

  ngOnInit(): void {
  }
  hide() {
    this.passowrdShow = !this.passowrdShow
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

  showPopup = false;
  openPopup() {
    this.showPopup = true
  }

  handleCancel() {
    console.log('Cancelled!');
    this.showPopup = false;
  }

  insideClick = false;
  isModalOpen3 = false;
  toggleModal3() {
    this.isModalOpen3 = !this.isModalOpen3;
    console.log(this.isModalOpen3);
  }

  selectedCountryPhone: any = {
    name: "AE", flag: "🇦🇪", code: "+97"
  }

  countriesWithFlag = [
    { name: "AF", flag: "🇦🇫", code: "+93" },
    { name: "AL", flag: "🇦🇱", code: "+355" },
    { name: "DZ", flag: "🇩🇿", code: "+213" },
    { name: "AS", flag: "🇦🇸", code: "+1-684" },
    { name: "AD", flag: "🇦🇩", code: "+376" },
    { name: "AO", flag: "🇦🇴", code: "+244" },
    { name: "AI", flag: "🇦🇮", code: "+1-264" },
    { name: "AG", flag: "🇦🇬", code: "+1-268" },
    { name: "AR", flag: "🇦🇷", code: "+54" },
    { name: "AM", flag: "🇦🇲", code: "+374" },
    { name: "AU", flag: "🇦🇺", code: "+61" },
    { name: "AT", flag: "🇦🇹", code: "+43" },
    { name: "AZ", flag: "🇦🇿", code: "+994" },
    { name: "BS", flag: "🇧🇸", code: "+1-242" },
    { name: "BH", flag: "🇧🇭", code: "+973" },
    { name: "BD", flag: "🇧🇩", code: "+880" },
    { name: "BB", flag: "🇧🇧", code: "+1-246" },
    { name: "BY", flag: "🇧🇾", code: "+375" },
    { name: "BE", flag: "🇧🇪", code: "+32" },
    { name: "BZ", flag: "🇧🇿", code: "+501" },
    { name: "BJ", flag: "🇧🇯", code: "+229" },
    { name: "BM", flag: "🇧🇲", code: "+1-441" },
    { name: "BT", flag: "🇧🇹", code: "+975" },
    { name: "BO", flag: "🇧🇴", code: "+591" },
    { name: "BA", flag: "🇧🇦", code: "+387" },
    { name: "BW", flag: "🇧🇼", code: "+267" },
    { name: "BR", flag: "🇧🇷", code: "+55" },
    { name: "BN", flag: "🇧🇳", code: "+673" },
    { name: "BG", flag: "🇧🇬", code: "+359" },
    { name: "BF", flag: "🇧🇫", code: "+226" },
    { name: "BI", flag: "🇧🇮", code: "+257" },
    { name: "KH", flag: "🇰🇭", code: "+855" },
    { name: "CM", flag: "🇨🇲", code: "+237" },
    { name: "CA", flag: "🇨🇦", code: "+1" },
    { name: "CV", flag: "🇨🇻", code: "+238" },
    { name: "CF", flag: "🇨🇫", code: "+236" },
    { name: "TD", flag: "🇹🇩", code: "+235" },
    { name: "CL", flag: "🇨🇱", code: "+56" },
    { name: "CN", flag: "🇨🇳", code: "+86" },
    { name: "CO", flag: "🇨🇴", code: "+57" },
    { name: "KM", flag: "🇰🇲", code: "+269" },
    { name: "CG", flag: "🇨🇬", code: "+242" },
    { name: "CD", flag: "🇨🇩", code: "+243" },
    { name: "CR", flag: "🇨🇷", code: "+506" },
    { name: "HR", flag: "🇭🇷", code: "+385" },
    { name: "CU", flag: "🇨🇺", code: "+53" },
    { name: "CY", flag: "🇨🇾", code: "+357" },
    { name: "CZ", flag: "🇨🇿", code: "+420" },
    { name: "DK", flag: "🇩🇰", code: "+45" },
    { name: "DJ", flag: "🇩🇯", code: "+253" },
    { name: "DM", flag: "🇩🇲", code: "+1-767" },
    { name: "DO", flag: "🇩🇴", code: "+1-809" },
    { name: "EC", flag: "🇪🇨", code: "+593" },
    { name: "EG", flag: "🇪🇬", code: "+20" },
    { name: "SV", flag: "🇸🇻", code: "+503" },
    { name: "GQ", flag: "🇬🇶", code: "+240" },
    { name: "ER", flag: "🇪🇷", code: "+291" },
    { name: "EE", flag: "🇪🇪", code: "+372" },
    { name: "ET", flag: "🇪🇹", code: "+251" },
    { name: "FJ", flag: "🇫🇯", code: "+679" },
    { name: "FI", flag: "🇫🇮", code: "+358" },
    { name: "FR", flag: "🇫🇷", code: "+33" },
    { name: "GA", flag: "🇬🇦", code: "+241" },
    { name: "GM", flag: "🇬🇲", code: "+220" },
    { name: "GE", flag: "🇬🇪", code: "+995" },
    { name: "DE", flag: "🇩🇪", code: "+49" },
    { name: "GH", flag: "🇬🇭", code: "+233" },
    { name: "GR", flag: "🇬🇷", code: "+30" },
    { name: "GD", flag: "🇬🇩", code: "+1-473" },
    { name: "GT", flag: "🇬🇹", code: "+502" },
    { name: "GN", flag: "🇬🇳", code: "+224" },
    { name: "GW", flag: "🇬🇼", code: "+245" },
    { name: "GY", flag: "🇬🇾", code: "+592" },
    { name: "HT", flag: "🇭🇹", code: "+509" },
    { name: "HN", flag: "🇭🇳", code: "+504" },
    { name: "HU", flag: "🇭🇺", code: "+36" },
    { name: "IS", flag: "🇮🇸", code: "+354" },
    { name: "IN", flag: "🇮🇳", code: "+91" },
    { name: "ID", flag: "🇮🇩", code: "+62" },
    { name: "IR", flag: "🇮🇷", code: "+98" },
    { name: "IQ", flag: "🇮🇶", code: "+964" },
    { name: "IE", flag: "🇮🇪", code: "+353" },
    { name: "IL", flag: "🇮🇱", code: "+972" },
    { name: "IT", flag: "🇮🇹", code: "+39" },
    { name: "JM", flag: "🇯🇲", code: "+1-876" },
    { name: "JP", flag: "🇯🇵", code: "+81" },
    { name: "JO", flag: "🇯🇴", code: "+962" },
    { name: "KZ", flag: "🇰🇿", code: "+7" },
    { name: "KE", flag: "🇰🇪", code: "+254" },
    { name: "KI", flag: "🇰🇮", code: "+686" },
    { name: "KW", flag: "🇰🇼", code: "+965" },
    { name: "KG", flag: "🇰🇬", code: "+996" },
    { name: "LA", flag: "🇱🇦", code: "+856" },
    { name: "LV", flag: "🇱🇻", code: "+371" },
    { name: "LB", flag: "🇱🇧", code: "+961" },
    { name: "LS", flag: "🇱🇸", code: "+266" },
    { name: "LR", flag: "🇱🇷", code: "+231" },
    { name: "LY", flag: "🇱🇾", code: "+218" },
    { name: "LI", flag: "🇱🇮", code: "+423" },
    { name: "LT", flag: "🇱🇹", code: "+370" },
    { name: "LU", flag: "🇱🇺", code: "+352" },
    { name: "MO", flag: "🇲🇴", code: "+853" },
    { name: "MK", flag: "🇲🇰", code: "+389" },
    { name: "MG", flag: "🇲🇬", code: "+261" },
    { name: "MW", flag: "🇲🇼", code: "+265" },
    { name: "MY", flag: "🇲🇾", code: "+60" },
    { name: "MV", flag: "🇲🇻", code: "+960" },
    { name: "ML", flag: "🇲🇱", code: "+223" },
    { name: "MT", flag: "🇲🇹", code: "+356" },
    { name: "MH", flag: "🇲🇭", code: "+692" },
    { name: "MQ", flag: "🇲🇶", code: "+596" },
    { name: "MR", flag: "🇲🇷", code: "+222" },
    { name: "MU", flag: "🇲🇺", code: "+230" },
    { name: "YT", flag: "🇾🇹", code: "+262" },
    { name: "MX", flag: "🇲🇽", code: "+52" },
    { name: "FM", flag: "🇫🇲", code: "+691" },
    { name: "MD", flag: "🇲🇩", code: "+373" },
    { name: "MC", flag: "🇲🇨", code: "+377" },
    { name: "MN", flag: "🇲🇳", code: "+976" },
    { name: "ME", flag: "🇲🇪", code: "+382" },
    { name: "MS", flag: "🇲🇸", code: "+1-664" },
    { name: "MA", flag: "🇲🇦", code: "+212" },
    { name: "MZ", flag: "🇲🇿", code: "+258" },
    { name: "MM", flag: "🇲🇲", code: "+95" },
    { name: "NA", flag: "🇳🇦", code: "+264" },
    { name: "NR", flag: "🇳🇷", code: "+674" },
    { name: "NP", flag: "🇳🇵", code: "+977" },
    { name: "NL", flag: "🇳🇱", code: "+31" },
    { name: "NC", flag: "🇳🇨", code: "+687" },
    { name: "NZ", flag: "🇳🇿", code: "+64" },
    { name: "NI", flag: "🇳🇮", code: "+505" },
    { name: "NE", flag: "🇳🇪", code: "+227" },
    { name: "NG", flag: "🇳🇬", code: "+234" },
    { name: "KP", flag: "🇰🇵", code: "+850" },
    { name: "NO", flag: "🇳🇴", code: "+47" },
    { name: "OM", flag: "🇴🇲", code: "+968" },
    { name: "PK", flag: "🇵🇰", code: "+92" },
    { name: "PA", flag: "🇵🇦", code: "+507" },
    { name: "PG", flag: "🇵🇬", code: "+675" },
    { name: "PY", flag: "🇵🇾", code: "+595" },
    { name: "PE", flag: "🇵🇪", code: "+51" },
    { name: "PH", flag: "🇵🇭", code: "+63" },
    { name: "PL", flag: "🇵🇱", code: "+48" },
    { name: "PT", flag: "🇵🇹", code: "+351" },
    { name: "PR", flag: "🇵🇷", code: "+1-787" },
    { name: "QA", flag: "🇶🇦", code: "+974" },
    { name: "RO", flag: "🇷🇴", code: "+40" },
    { name: "RU", flag: "🇷🇺", code: "+7" },
    { name: "RW", flag: "🇷🇼", code: "+250" },

  ];
  selectCoutryPhone(item: any) {
    this.isModalOpen3 = false
    this.selectedCountryPhone = item
  }


}
