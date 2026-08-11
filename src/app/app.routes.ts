import { Routes } from '@angular/router';
import { StudentDashboardComponent } from './features/student-dashboard/student-dashboard.component';
import { CourseDetailComponent } from './features/course-detail/course-detail.component';
import { EnrollmentListComponent } from './features/enrollment-list/enrollment-list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: StudentDashboardComponent },
  { path: 'courses/:id', component: CourseDetailComponent },
  { path: 'enrollments', component: EnrollmentListComponent },
  
  // 👈 አዲስ የተጨመረው Instructor Dashboard Route (Lazy Loaded)
  {
    path: 'instructor',
    loadComponent: () =>
      import('./features/instructor-dashboard/instructor-dashboard.component').then(
        (m) => m.InstructorDashboardComponent
      ),
  },
    {
  path: 'grade-submission',
  loadComponent: () =>
    import('./features/grade-submission/grade-submission.component')
      .then(m => m.GradeSubmissionComponent)
},
  {
    path: 'enroll',
    loadComponent: () =>
      import('./features/enrollment-form/enrollment-form.component').then(
        (m) => m.EnrollmentFormComponent
      ),
  },
  { path: '**', redirectTo: 'dashboard' }
];