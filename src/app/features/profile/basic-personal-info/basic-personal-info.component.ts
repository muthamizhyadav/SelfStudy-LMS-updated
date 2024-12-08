import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, HostListener, OnDestroy, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { DataHandlerService } from '../../../shared/service/datahandler.service';
import { NotifierService } from '../../../shared/service/notifier.service';
import { EncryptionService } from '../../../shared/service/encryption.service';
import { CountryModel } from '../../../shared/model/country.model';
import { BasicDetModel } from '../../../shared/model/basic-details.model';
import { ApiSettings } from '../../../app-settings/api-settings';
import { finalize } from 'rxjs';

@Component({
  selector: 'basic-personal-info',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './basic-personal-info.component.html'
})
export class BasicPersonalInfoComponent implements AfterViewInit, OnDestroy {
  @ViewChild('toggleButton') toggleButton!: ElementRef;

  isModalOpen = false;
  isModalOpen2 = false;
  isModalOpen3 = false;

  insideClick = false;
  toggleModal() {
    this.isModalOpen = !this.isModalOpen;
    console.log(this.isModalOpen);
  }

  toggleModal2() {
    this.isModalOpen2 = !this.isModalOpen2;
    console.log(this.isModalOpen2);
  }

  toggleModal3() {
    this.isModalOpen3 = !this.isModalOpen3;
    console.log(this.isModalOpen3);
  }


  onModalClick(event: Event): void {
    event.stopPropagation();
  }
  ngOnDestroy(): void {
    document.removeEventListener('click', this.handleOutsideClick.bind(this));
  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      if (this.toggleButton) {
        document.addEventListener('click', this.handleOutsideClick.bind(this));
      }
    });
  }

  handleOutsideClick(event: MouseEvent): void {
    if (this.toggleButton && !this.toggleButton.nativeElement.contains(event.target)) {
      if (this.isModalOpen) {
        this.isModalOpen = false;
      }
    }
  }


  selectedCountry: any = {
    name: "AE", flag: "🇦🇪", code: "+97"
  }

  selectedCountryOffice: any = {
    name: "AE", flag: "🇦🇪", code: "+97"
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
    { name: "AE", flag: "🇦🇪", code: "+97" },
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

  ];

  selectCoutry(item: any) {
    this.isModalOpen = false
    this.selectedCountry = item
  }

  selectCoutryOffice(item: any) {
    this.isModalOpen2 = false
    this.selectedCountryOffice = item
  }

  selectCoutryPhone(item: any) {
    this.isModalOpen3 = false
    this.selectedCountryPhone = item
  }

}
