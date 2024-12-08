import { Routes } from '@angular/router';
import { UpcomingEventsComponent } from './features/dashboard/upcoming-events/upcoming-events.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ViewDashboardComponent } from './features/dashboard/view-dashboard/view-dashboard.component';
import { CourseHomeComponent } from './features/course/dashboard/course-home/course-home.component';
import { ViewModuleComponent } from './features/course/module-unit-details/view-module/view-module.component';
import { CourseEnrollmentComponent } from './features/course/course-payment/course-enrollment/course-enrollment.component';
import { ViewAllCourseAssignmentStatusComponent } from './features/course/course-status/view-all-course-assignment-status/view-all-course-assignment-status.component';
import { QuizViewAndSubmissionComponent } from './features/course/quiz/quiz-view-and-submission/quiz-view-and-submission.component';
import { ViewQuizResultComponent } from './features/course/quiz/view-quiz-result/view-quiz-result.component';
import { AssessmentSubmissionComponent } from './features/course/assessment-task/assessment-submission/assessment-submission.component';
import { PersonalInformationComponent } from './features/course/student-admission-form/personal-information/personal-information.component';
import { StudentDeclarationComponent } from './features/course/student-admission-form/student-declaration/student-declaration.component';
import { ViewWebinarComponent } from './features/webinar/view-webinar/view-webinar.component';
import { PaymentDetailsComponent } from './features/Payment/payment-details/payment-details.component';
import { ReferFormSubmitComponent } from './features/Refer/refer-form-submit/refer-form-submit.component';
import { EarnedCertificatesComponent } from './features/certifications/earned-certificates/earned-certificates.component';
import { UpcomingCertificatesComponent } from './features/certifications/upcoming-certificates/upcoming-certificates.component';
import { FeedbackSubmitFormComponent } from './features/feedback/feedback-submit-form/feedback-submit-form.component';
import { ProfileViewComponent } from './features/profile/profile-view/profile-view.component';
import { ChangePasswordComponent } from './features/profile/change-password/change-password.component';
import { ReferralScreenComponent } from './referral-screen/referral-screen.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';

export const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  {path:'forget-pass',component:ForgotPasswordComponent},
  {
    path: 'courses',
    children: [
      {
        path: '',
        component: CourseHomeComponent,
      },
      {
        path: 'details',
        component: ViewModuleComponent,
      },
      {
        path: 'payment',
        component: CourseEnrollmentComponent,
      },
      //   {
      //     path: 'combo',
      //     component: CourseComboComponent,
      //   },
      {
        path: 'quiz',
        component: ViewQuizResultComponent,
      },
      {
        path: 'task',
        component: AssessmentSubmissionComponent,
      },
      {
        path: 'status',
        component: ViewAllCourseAssignmentStatusComponent,
      },
      {
        path: 'ap-one',
        component: PersonalInformationComponent,
      },
      {
        path: 'ap-two',
        component: StudentDeclarationComponent,
      },
    ],
  },
  { path: 'dashboard', component: ViewDashboardComponent },
  {
    path: 'test',
    component: QuizViewAndSubmissionComponent,
  },
  {
    path: 'quiz-result',
    component: ViewQuizResultComponent,
  },
  {
    path:'webinars',
    component:ViewWebinarComponent
  },
  {
    path:'payments',
    component:PaymentDetailsComponent
  },{
    path:'refer',
    component:ReferFormSubmitComponent
  },{
    path:'certifications',
   
    children:[
      {
        path:'',
        component:EarnedCertificatesComponent,
      },
      {
        path:'up',
        component:UpcomingCertificatesComponent
      }
    ]
  },{
    path:'feedback',
    component:FeedbackSubmitFormComponent
  },
  {
    path:'profile',
    component:ProfileViewComponent
  },
  {
    path:'change-pass',
    component:ChangePasswordComponent
  },
  {
    path:'referral',
    component:ReferralScreenComponent
  }
];
