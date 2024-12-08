import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-quiz-view-and-submission',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quiz-view-and-submission.component.html',
  styleUrl: './quiz-view-and-submission.component.css'
})
export class QuizViewAndSubmissionComponent {
  show: any = 'start'
  selected: number = 0
  changeShow(v: any) {
    this.show = v
  }

  selectOption(sel: number) {
    this.selected = sel
    console.log(this.selected,"sel");
    
  }

}
