import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { DataHandlerService } from './datahandler.service';

@Injectable({
  providedIn: 'root',
})
export class IdleTimeoutService {
  idleTime: number = 0; // Tracks how long the user has been idle in seconds
  timeout: number = 3600; // Set the idle timeout limit (e.g., 5 minutes)
  warningDuration: number = 60; // Duration in seconds before the user is timed out
  private idleInterval: any; // Store the interval for the timer

  constructor(private router: Router, private ngZone: NgZone, private authService: DataHandlerService) { }

  startWatching() {
    if (this.authService.getToken()) {
      this.resetTimer(); // Reset idle timer when the component loads
      this.setupEvents(); // Set up user activity event listeners
    }
  }

  private setupEvents() {
    // Events to listen to in order to reset the timer
    ['mousemove', 'keypress', 'click', 'scroll', 'touchstart'].forEach((event) => {
      window.addEventListener(event, () => this.resetTimer());
    });
  }

  private startTimer() {
    // Start the idle timer in the background using Angular's NgZone
    this.ngZone.runOutsideAngular(() => {
      this.idleInterval = setInterval(() => {
        this.idleTime++;

        // Show warning before logging the user out
        if (this.idleTime === this.timeout - this.warningDuration) {
          this.showWarning();
        }

        // Log out the user after reaching the idle timeout
        if (this.idleTime >= this.timeout) {
          this.ngZone.run(() => this.timeoutAction());
        }
      }, 1000); // Timer updates every second
    });
  }

  private resetTimer() {
    this.idleTime = 0; // Reset the idle timer
    if (!this.idleInterval) {
      this.startTimer(); // Start the timer if not already started
    }
  }

  private showWarning() {
    alert(`You will be logged out in ${this.warningDuration} seconds due to inactivity!`);
  }

  private timeoutAction() {
    alert('You have been idle for too long. You will be logged out!');
    clearInterval(this.idleInterval); // Clear the interval to stop the timer
    this.idleInterval = null;
    // Redirect to the login page or perform any other action
    this.router.navigate(['/login']);
  }
}
