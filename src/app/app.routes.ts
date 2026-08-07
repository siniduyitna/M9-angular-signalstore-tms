import { Routes } from '@angular/router';
import { StudentDashboardComponent } from './features/student-dashboard/student-dashboard.component';
import { CourseDetailComponent } from './features/course-detail/course-detail.component';
import { EnrollmentListComponent } from './features/enrollment-list/enrollment-list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: StudentDashboardComponent },
  { path: 'courses/:id', component: CourseDetailComponent },
  { path: 'enrollments', component: EnrollmentListComponent },
  
  {
    path: 'enroll',
    loadComponent: () =>
      import('./features/enrollment-form/enrollment-form.component').then(
        (m) => m.EnrollmentFormComponent
      ),
  },
  { path: '**', redirectTo: 'dashboard' }
];