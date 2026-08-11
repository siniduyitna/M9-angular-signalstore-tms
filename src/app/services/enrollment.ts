import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Enrollment } from '../models/enrollment.model';

@Injectable({
  providedIn: 'root',
})
export class EnrollmentService {
  private http = inject(HttpClient);

  private getApiUrl(courseId: number = 1): string {
    return `http://localhost:5010/api/courses/${courseId}/enrollments`;
  }

  getAll(courseId: number = 1): Observable<Enrollment[]> {
    return this.http.get<Enrollment[]>(this.getApiUrl(courseId)).pipe(
      map((enrollments) =>
        enrollments.map((e) => ({
          ...e,
          status: e.status || 'Pending', //  status ከሌለው 'Pending' ያደርገዋል
        }))
      )
    );
  }

  approve(id: number, courseId: number = 1): Observable<void> {
    return this.http.post<void>(`${this.getApiUrl(courseId)}/${id}/approve`, {});
  }
}