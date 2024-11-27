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
}
