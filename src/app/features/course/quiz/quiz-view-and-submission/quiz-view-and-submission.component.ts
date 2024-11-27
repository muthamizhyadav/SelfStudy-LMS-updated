import { Component } from '@angular/core';

@Component({
  selector: 'app-quiz-view-and-submission',
  standalone: true,
  imports: [],
  templateUrl: './quiz-view-and-submission.component.html',
  styleUrl: './quiz-view-and-submission.component.css'
})
export class QuizViewAndSubmissionComponent {
  show:any ='start'
  changeShow(v:any){
    this.show= v
  }
}
