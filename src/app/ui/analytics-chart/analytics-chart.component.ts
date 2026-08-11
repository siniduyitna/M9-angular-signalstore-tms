import { Component, input } from '@angular/core';
import { Enrollment } from '../../models/enrollment.model';

@Component({
  selector: 'tms-analytics-chart',
  standalone: true,
  imports: [],
  template: `
    <div class="chart-card">
      <h3>Enrollment Analytics Chart</h3>
      <p>Loaded records: {{ data().length }}</p>
    </div>
  `,
  styles: [`
    .chart-card {
      padding: 20px;
      border: 2px dashed #3f51b5;
      background: #f5f5f5;
      border-radius: 8px;
      margin-top: 20px;
      text-align: center;
    }
  `]
})
export class AnalyticsChartComponent {
  data = input<Enrollment[]>([]);
}