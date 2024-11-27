export enum ApiSettings{
    SITE_URL = "http://localhost:4200",
    API_URL = 'https://localhost:44345/api/',

    //user
    AUTH_USER = "User/AuthenticateUser",
    INSERT_STUDENT_DETAILS = "User/InsertStudentDetails",

    //common
    GET_COUNTRY = "Common/GetCountry",
    GET_NATIONALITY = "Common/GetNationality",

    //profile
    GET_BASIC_DETAILS = "Profile/GetUserBasicDetails",
    UPDATE_BASIC_DETAILS = "Profile/UpdateBasicDetails",
    UPDATE_PASSWORD = "Profile/UpdatePassword",

    //Course
    GET_RECOMMENDED_COURSE_BY_ID = "Course/GetRecommendedCourseById",
    GET_STUDENT_ENROLLED_COURSES = "Course/GetStudentEnrolledCourses",
    GET_RESUME_LEARNING = "Course/GetResumeLearning",
    GET_MODULE_UNIT_DETAIL = "Course/GetModuleUnitDetail",
    GET_COURSE_OVERVIEW = "Course/GetCourseOverview",
    GET_ASSIGNMENT_SUBMISSION = "Course/GetAssignmentSubmission",
    INSERT_ASSIGNMENT_SUBMISSION = "Course/InsertAssignmentSubmission",
    GET_FEATURED_COURSES = "Course/GetFeaturedCourses",
    GET_COURSE_OVERALL_RATING =  "Course/GetCourseOverAllRating",
    GET_COURSE_RATING = "Course/GetCourseRating",
    INSERT_COURSE_RATING = "Course/InsertCourseRating",
    GET_COURSE_MORE_DETAILS =  "Course/GetCourseMoreDetails",

    //dashboard
    GET_UPCOMING_WEBINARS = "Dashboard/GetUpcomingWebinars",
    GET_STUDENTS_EVENTS_COLOR_CLASS ="Dashboard/GetStudentsEventsColorClass",
    GET_STUDENTS_EVENTS_DETAILS = "Dashboard/GetStudentsEventsDetails",
    GET_COURSE_PROGRESS = "Dashboard/GetCourseProgress",
    GET_INPROGRESS_ACADEMIC_JOURNEY = "Dashboard/GetInProgressAcademicJourney",
    GET_ENROLLED_COURSES = "Dashboard/GetEnrolledCourses",
    GET_ENROLLED_COURSE_MODULES = "Dashboard/GetEnrolledCoursesModules",

    //Certificate
    GET_COURSE_MODULE_CERTIFICATES = "Certificate/GetCourseModuleCertificates",
    GET_CERTIFICATE_BENEFITS = "Certificate/GetCertificatesBenefits",

    //CoursePayment
    GET_STUDENT_COURSE_ENROLLED_DETAILS = "CoursePayment/GetStudentCourseEnrolledDetails",
    GET_STUDENT_COURSE_PAYMENT_PLAN = "CoursePayment/GetStudentCoursePaymentPlan",
    GET_STUDENT_COMBO_COURSE_PAYMENT_PLAN = "CoursePayment/GetStudentComboCoursePaymentPlan",
    INSERT_STUDENT_PERSONAL_DETAILS = "CoursePayment/InsertStudentPersonalDetails",

    //Education
    GET_EDUCATION_DETAILS = "Education/GetEducationDetails",
    INSERT_EDUCATION_DETAILS = "Education/InsertEducationDetails",
    UPDATE_EDUCATION_DETAILS_BY_ID = "Education/UpdateEducationDetailsById",
    DELETE_EDUCATION_DETAILS_BY_ID = "Education/DeleteEducationDetailsById",

    //FeedBack
    INSERT_STUDENT_FEEDBACK = "FeedBack/InsertStudentFeedBack",
    GET_STUDENT_FEEDBACK_QUESTIONS = "FeedBack/GetStudentFeedBackQusestions",

    //Module
    GET_STUDENT_MODULES = "Module/GetStudentModules",
    GET_CHAPTER_DETAILS = "Module/GetChapterDetails",
    GET_TOPIC_DETAILS = "Module/GetTopicDetails",
    INSERT_STUDENT_NOTES = "Module/InsertStuNotes",

    //Payment
    GET_STUDENT_PAYMENT = "Payment/GetStudentPayment",
    GET_STUDENT_PAYMENT_INVOICE = "Payment/GetStudentPaymentInvoice",

    //Quiz
    GET_QUESTIONNAIRES = "Quiz/GetQuestionnaires",
    GET_QUIZ_SCORE = "Quiz/GetQuizScore",

    //Referral
    INSERT_STUDENT_REFERRAL = "Referral/InsertStudentReferral",
    GET_REFERRAL_DETAILS = "Referral/GetReferralDetails",

    //Webinar
    GET_WEBINARS = "Webinar/GetWebinars",
    INSERT_WEBINAR_REGISTRATION ="Webinar/InsertWebinarRegistration",

    //Work
    INSERT_WORK_DETAILS = "Work/InsertWorkDetails",
    GET_WORK_DETAILS = "Work/GetWorkDetails",
    UPDATE_WORK_DETAILS_BY_ID = "Work/UpdateWorkDetailsById",
    DELETE_WORK_DETAILS_BY_ID ="Work/DeleteWorkDetailsById"
}