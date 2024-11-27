import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { map, take } from 'rxjs/operators'
import { EncryptionService } from './encryption.service';
import { ResultModel } from '../model/result.model';
import { UserModel } from '../model/user.model';
import { ApiSettings } from '../../app-settings/api-settings';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  profileImage=signal('');
  businessUnit: string = this.encryptionService.decryptionAES(localStorage.getItem('businessUnit') || '');

  constructor(private httpClient: HttpClient,
    private encryptionService: EncryptionService) { }

    setProfileImage(value:string)
    {
      this.profileImage.set(value);
    } 

  getData<T>(endPoint: string) {
    const url = ApiSettings.API_URL + endPoint;
    return this.httpClient.get<ResultModel[]>(url).pipe(take(1),
      map(responseData => {
        if (responseData[0].rowNo == 0) {
          return null;
        }
        else {
          const responseModel: T = JSON.parse(responseData[0].result);
          return responseModel;
        }
      }),
      catchError((error: HttpErrorResponse) => this.handleError(error))
    );
  }

  postData<T>(endPoint: string, queryParameter: string) {

    let params = { parameter: queryParameter, type: this.businessUnit };
    const url = ApiSettings.API_URL + endPoint;
    return this.httpClient.post<ResultModel[]>(url, params).pipe(take(1),
      map(responseData => {
        if (responseData[0].rowNo == 0) {
          return null;
        }
        else {
          const responseModel: T = JSON.parse(responseData[0].result);
          return { responseModel: responseModel, rowNo: responseData[0].rowNo };
          
        }
      }),
      catchError((error: HttpErrorResponse) => this.handleError(error))
    );
  }

  saveData(endPoint: string, queryParameter: string) {
    let params = { parameter: queryParameter, type: this.businessUnit };
    const url = ApiSettings.API_URL + endPoint;
    return this.httpClient.post<ResultModel[]>(url, params).pipe(take(1),
      catchError((error: HttpErrorResponse) => this.handleError(error))
    );
  }

  saveWebinarData(endPoint: string, uId: string, WId:string,fName:string,lName:string,studEmail:string,MeetingId :string,WebhookURL :string) {
    let params = { userId:uId ,webinarId : WId,firstName :fName,lastName:lName,email:studEmail,webinarMeetingId:MeetingId,webhookURL:WebhookURL};
    const url = ApiSettings.API_URL + endPoint;
    return this.httpClient.post<ResultModel[]>(url, params).pipe(take(1),
      catchError((error: HttpErrorResponse) => this.handleError(error))
    );
  }

  uploadFile(endPoint: string, queryParameter: any) {
    const url = ApiSettings.API_URL + endPoint;
    return this.httpClient.post<ResultModel>(url, queryParameter).pipe(take(1),
      catchError((error: HttpErrorResponse) => this.handleError(error))
    );
  }

  downloadFile(endPoint: string, queryParameter: any) {
    let params = { parameter: queryParameter, type: this.businessUnit };
    const url = ApiSettings.API_URL + endPoint;
    return this.httpClient.post<ResultModel>(url, params).pipe(take(1),
      catchError((error: HttpErrorResponse) => this.handleError(error))
    );
  }


  authoriseUser(endPoint: string, queryParameter: string) {
    let params = { parameter: queryParameter, businessUnit: this.businessUnit };
    const url = ApiSettings.API_URL + endPoint;
    return this.httpClient.post<UserModel>(url, params).pipe(take(1),
      catchError((error: HttpErrorResponse) => this.handleError(error))
    );
  }

  private handleError(error: HttpErrorResponse) {
    const message = 'ERROR : Unable to connect to service , please try again later';
    return throwError(message);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  checkMainDashboard() {
    return this.encryptionService.decryptionAES(localStorage.getItem('isMainDash') || "0");
  }

  checkMenuTypeId() {
    return this.encryptionService.decryptionAES(localStorage.getItem('MenuTypeId') || "0");
  }

  checkProfileLoad() {
    return this.encryptionService.decryptionAES(localStorage.getItem('profileImage') || "");
  }

  clearMainDashDet(){
    localStorage.setItem("courseId","");
    localStorage.setItem("courseName","");
    localStorage.setItem("isMainDash","");
  }

}
