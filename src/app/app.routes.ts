import { Routes } from '@angular/router';
import { StudentDashboardComponent } from './features/student-dashboard/student-dashboard.component';
import { CourseDetailComponent } from './features/course-detail/course-detail.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: StudentDashboardComponent },
  { path: 'courses/:id', component: CourseDetailComponent }, // አዲሱ የ detail route
  { path: '**', redirectTo: 'dashboard' }
];