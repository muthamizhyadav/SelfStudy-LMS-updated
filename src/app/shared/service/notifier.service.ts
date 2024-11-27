import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotifierService {
  showDailog:boolean=false;
  isSuccess:boolean=false;
  isError:boolean=false;
  isWarning:boolean=false;
  showMessage:string="";
  constructor(private toaster: ToastrService) { }

  toasterOptions:any={
    timeOut: 5000,
    progressBar: true,
    closeButton:true,
    progressAnimation: 'increasing'
  }

  showSuccess(message: any, title: any) {
    // this.isSuccess=true;
    // this.showDailog=true;
    // this.showMessage=message;
    this.toaster.success(message, title,this.toasterOptions);
  }

  showError(message: any, title: any) {
    // this.isError=true;
    // this.showDailog=true;
    // this.showMessage=message;
    this.toaster.error(message, title,this.toasterOptions);
  }

  showWarning(message: any, title: any) {
    // this.isWarning=true;
    // this.showDailog=true;
    // this.showMessage=message;
    this.toaster.warning(message, title,this.toasterOptions);
  }

  showInfo(message: any, title: any) {
    this.toaster.info(message, title,this.toasterOptions);
  }

}
