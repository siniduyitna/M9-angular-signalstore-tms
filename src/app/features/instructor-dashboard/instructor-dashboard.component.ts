import { Component, inject, OnInit } from '@angular/core';
import { EnrollmentStore } from '../../store/enrollment.store';
import { AnalyticsChartComponent } from '../../ui/analytics-chart/analytics-chart.component';

@Component({
  selector: 'tms-instructor-dashboard',
  standalone: true,
  imports: [AnalyticsChartComponent],
  templateUrl: './instructor-dashboard.component.html'
})
export class InstructorDashboardComponent implements OnInit {
  readonly store = inject(EnrollmentStore);

  ngOnInit() {
    // ዳታው ከአገልጋዩ እንዲመጣ የማስነሻ ጥሪ
    this.store.loadEnrollments(1);
  }
}