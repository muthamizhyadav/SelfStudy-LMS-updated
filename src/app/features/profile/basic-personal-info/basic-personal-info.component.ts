import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataHandlerService } from '../../../shared/service/datahandler.service';
import { NotifierService } from '../../../shared/service/notifier.service';
import { EncryptionService } from '../../../shared/service/encryption.service';
import { CountryModel } from '../../../shared/model/country.model';
import { BasicDetModel } from '../../../shared/model/basic-details.model';
import { ApiSettings } from '../../../app-settings/api-settings';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-basic-personal-info',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './basic-personal-info.component.html'
})
export class BasicPersonalInfoComponent {

  private pCode: any;
  private userId: string = '';
  private initialValue: any = "";
  protected basicDetForm: FormGroup = new FormGroup('');
  protected countryData: CountryModel[] = [];
  protected basicDetData: BasicDetModel[] = [];
  protected birthDate: any = "";
  protected dateType: string = "dateDOB";
  protected showConfirmation: boolean = false;
  protected hasChange: boolean = false;
  isLoading = false;

  constructor(
    private router: Router,
    private dataHandlerService: DataHandlerService,
    private toaster: NotifierService,
    private encryptionService: EncryptionService,
    private cdr: ChangeDetectorRef) { }


  ngOnInit(): void {
    this.userId = this.encryptionService.decryptionAES(localStorage.getItem('userId') || '');
    this.initializeForm();
    this.getCountry();
    this.loadBasicDetails();
    this.cdr.detectChanges();
  }

  private onCreateGroupFormValueChange() {
    if (this.initialValue === "") {
      this.initialValue = this.basicDetForm.value
    }

    this.basicDetForm.valueChanges.subscribe(value => {
      this.hasChange = Object.keys(this.initialValue).some(key => this.basicDetForm.value[key] !=
        this.initialValue[key])
    });
  }

  protected onChangeCountry(event: Event) {
    this.pCode = this.countryData.filter(p => p.countryId === Number((<HTMLSelectElement>event.target).value))
    if (this.pCode.length > 0) {
      this.basicDetForm.controls['phoneCode'].setValue(this.pCode[0].phoneCode);
    }
    else {
      this.basicDetForm.controls['phoneCode'].setValue('');
    }
  }

  protected onChangeBasicDetails() {
    if (this.basicDetForm.valid) {
      this.isLoading = true;
      if (this.hasChange === true) {
        let changedValues = this.getChangedValues();
        this.dataHandlerService.saveData(ApiSettings.UPDATE_BASIC_DETAILS,
          JSON.stringify(changedValues)).pipe(
            finalize(() => {
              this.isLoading = false;
            })
          ).subscribe(
            resultModel => {
              if (resultModel) {
                if (resultModel[0].rowNo === 0) {
                  this.toaster.showSuccess(resultModel[0].result, "");
                }
                else {
                  this.showConfirmation = true;
                }
              }
            }
          );
      }
      else {
        if (Number(this.encryptionService.decryptionAES(localStorage.getItem('IsAssignmentPolicyAgreed') || '') == "0")) {
          this.router.navigate(['declarationpolicy']);
        }
        else if (this.encryptionService.decryptionAES(localStorage.getItem('IsAssignmentPolicyAgreed') || '') == "0") {
          this.router.navigate(['assignmentpolicy']);

        }
        else {
          this.router.navigate(['coursedashboard']);
        }
      }
    }
  }

  private getChangedValues(): { [key: string]: any } {
    let fieldsToTrack = ['contactNo', 'title', 'phoneCode', 'nationalityId', 'dob', 'address', 'gender', 'countryId']; // Fields to check for changes
    let result: { [key: string]: any } = {};
    let currentValue = this.basicDetForm.value;

    Object.keys(currentValue).forEach(key => {
      if (fieldsToTrack.includes(key)) {
        if (currentValue[key] !== this.initialValue[key]) {
          result[key] = currentValue[key];
        }
      } else {
        result[key] = currentValue[key];
      }
    });

    return result;
  }

  protected initializeForm() {
    this.basicDetForm = new FormGroup({
      email: new FormControl(""),
      title: new FormControl("", [Validators.required]),
      firstName: new FormControl("", [Validators.required]),
      lastName: new FormControl(""),
      gender: new FormControl("Male", [Validators.required]),
      dob: new FormControl(""),
      nationalityId: new FormControl("", [Validators.required]),
      countryId: new FormControl("", [Validators.required]),
      phoneCode: new FormControl(""),
      contactNo: new FormControl("", [Validators.required, Validators.pattern("^[0-9]*$")]),
      address: new FormControl(""),
      advisorName: new FormControl(""),
      advisorEmail: new FormControl("")
    });

  }

  private getCountry() {
    this.dataHandlerService.postData<CountryModel[]>(ApiSettings.GET_COUNTRY, JSON.stringify({ filterType: 'Country' })).subscribe(
      countryModel => {
        if (countryModel) {
          this.countryData = countryModel.responseModel;
        }
      });
  }

  private loadBasicDetails() {
    this.dataHandlerService.postData<BasicDetModel[]>(ApiSettings.GET_BASIC_DETAILS, JSON.stringify({ userId: this.userId })).subscribe(
      basicDetModel => {
        if (basicDetModel) {
          this.basicDetData = basicDetModel.responseModel;
          this.basicDetForm.setValue({
            email: basicDetModel.responseModel[0].email,
            title: basicDetModel.responseModel[0].title,
            firstName: basicDetModel.responseModel[0].firstName,
            lastName: basicDetModel.responseModel[0].lastName,
            gender: basicDetModel.responseModel[0].gender,
            dob: basicDetModel.responseModel[0].birthDate,
            nationalityId: basicDetModel.responseModel[0].nationality,
            countryId: basicDetModel.responseModel[0].countryId,
            phoneCode: basicDetModel.responseModel[0].phoneCode,
            contactNo: basicDetModel.responseModel[0].mobile,
            address: basicDetModel.responseModel[0].address,
            advisorName: basicDetModel.responseModel[0].advisorName,
            advisorEmail: basicDetModel.responseModel[0].advisorEmail
          });

          this.birthDate = basicDetModel.responseModel[0].birthDate;
          this.cdr.detectChanges();
          this.onCreateGroupFormValueChange();
        }
      });
  }

}
