import { Component, inject, OnInit } from '@angular/core';
import { EnrollmentStore } from '../../store/enrollment.store';

@Component({
  selector: 'tms-enrollment-list',
  standalone: true,
  templateUrl: './enrollment-list.component.html'
})
export class EnrollmentListComponent implements OnInit {
  store = inject(EnrollmentStore);

  ngOnInit() {
    this.store.loadEnrollments(1);
  }

onApprove(id: string | number) {
  this.store.approveEnrollment(Number(id));
}
}