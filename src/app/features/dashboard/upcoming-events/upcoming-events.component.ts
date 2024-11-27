import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataHandlerService } from '../../../shared/service/datahandler.service';
import { EncryptionService } from '../../../shared/service/encryption.service';
import { UpcomingEventsModel } from '../../../shared/model/upcoming-events.model';
import { ApiSettings } from '../../../app-settings/api-settings';

@Component({
  selector: 'app-upcoming-events',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './upcoming-events.component.html',
  styleUrl: './upcoming-events.component.css'
})
export class UpcomingEventsComponent {

  private userId: string = '';
  protected upcomingDet: UpcomingEventsModel[] = [];

  constructor(private dataHandlerService: DataHandlerService,
    private encryptionService: EncryptionService
    ) { }

  ngOnInit(): void {
    this.userId = this.encryptionService.decryptionAES(localStorage.getItem('userId') || '');
    this.getUpcomingEvents();
  }

  protected getUpcomingEvents(){
    this.dataHandlerService.postData<UpcomingEventsModel[]>(ApiSettings.GET_UPCOMING_WEBINARS, JSON.stringify({ userId: this.userId})).subscribe(
      upcomingEventsModel => {
        if (upcomingEventsModel) {
          this.upcomingDet = upcomingEventsModel.responseModel;         
        }
      });
  }
}
