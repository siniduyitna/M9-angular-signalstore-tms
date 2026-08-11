import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EnrollmentStore } from './store/enrollment.store';
import { EnrollmentListComponent } from './features/enrollment-list/enrollment-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EnrollmentListComponent], // HTML ላይ <router-outlet> ካለህ እንደነበረ ይቆያል
  templateUrl: './app.html',
styleUrl: './app.scss'
})
export class AppComponent {
  title = 'tms-client';
  store = inject(EnrollmentStore);
  ngOnInit() {
    // የመጀመርያ መረጃዎችን ይጭናል እንዲሁም የ SignalR አየር ላይ ግንኙነቱን ያስነሳል
    this.store.listenForLiveUpdates();
  }
 
}