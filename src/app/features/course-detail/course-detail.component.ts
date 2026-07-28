import { Component, input, signal, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.scss'
})
export class CourseDetailComponent implements OnInit {
  // route parameter `:id` በቀጥታ እዚህ ጋር ይገባል
  id = input<string>(); 

  course = signal<Course | null>(null);

  // Mock data ለጊዜው
  private mockCourses: Course[] = [
    { id: 1, title: 'Advanced Java Services', code: 'CSE-101', maxCapacity: 30, enrollmentCount: 10 },
    { id: 2, title: 'Angular UI Lab', code: 'CSE-210', maxCapacity: 25, enrollmentCount: 25 },
    { id: 3, title: 'Database Design', code: 'CSE-305', maxCapacity: 20, enrollmentCount: 18 },
    { id: 4, title: 'API Security Workshop', code: 'CSE-420', maxCapacity: 40, enrollmentCount: 15 }
  ];

  ngOnInit() {
    const courseId = Number(this.id());
    const found = this.mockCourses.find(c => c.id === courseId);
    if (found) {
      this.course.set(found);
    }
  }
}