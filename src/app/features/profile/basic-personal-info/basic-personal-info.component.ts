import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
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
  imports: [CommonModule,RouterModule, ReactiveFormsModule],
  templateUrl: './basic-personal-info.component.html'
})
export class BasicPersonalInfoComponent {

 
}
