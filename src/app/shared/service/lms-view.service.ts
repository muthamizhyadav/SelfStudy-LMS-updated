import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { EncryptionService } from "./encryption.service";

@Injectable({
    providedIn: "root",
  })
  
export class LmsViewOnlyService {
    constructor(private toaster: ToastrService,
      private encryptionService: EncryptionService,
    ) { }

    toasterOptions:any={
        timeOut: 5000,
        progressBar: true,
        closeButton:true,
        progressAnimation: 'increasing'
      }

    public showUnauthraiseCommonPopup(){
        this.toaster.info("You don't have the necessary permissions to access this event", "Warning", this.toasterOptions);
    }

    public isLmsViewOnlyAccess(){
      let IsLmsViewOnly = this.encryptionService.decryptionAES(localStorage.getItem('IsLmsViewOnly') || '');
      return IsLmsViewOnly;
    }
}