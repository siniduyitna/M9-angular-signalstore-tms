import { Component, signal, computed, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { CourseCardComponent } from '../../ui/course-card/course-card';
import { Course } from '../../models/course.model';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-student-dashboard',
  standalone: true,
  imports: [CourseCardComponent],
  templateUrl: './student-dashboard.component.html',
  styleUrl: './student-dashboard.component.scss'
})
export class StudentDashboardComponent {
  private api = inject(CourseService);

  studentName = signal('Liya Kebede');
  earnedCredits = signal(45);

  // 1. የተመዘገቡ ኮርሶችን ID ለመያዝ Set/Array number
  enrolledCourseIds = signal<Set<number>>(new Set());

  graduationStatus = computed(() =>
    this.earnedCredits() >= 120 ? 'Eligible for Graduation' : 'In Progress'
  );

  // rxResource automatic status control
  coursesResource = rxResource({
    stream: () => this.api.getAll(),
  });

  registerForClass() {
    this.earnedCredits.update((c) => c + 3);
  }

  // 2. handleEnroll ሲነካ logic-ኡ ይፈጸማል
  handleEnroll(course: Course) {
    // ቀድሞ ከተመዘገበ ደግሞ እንዳይመዘገብ መከልከል
    if (this.enrolledCourseIds().has(course.id)) return;

    // ሀ) የተመዘገበበትን ኮርስ ID መመዝገብ
    this.enrolledCourseIds.update((ids) => {
      const updated = new Set(ids);
      updated.add(course.id);
      return updated;
    });

    // ለ) የተማሪውን Credit በ 3 (ወይም በኮርሱ
    this.earnedCredits.update((c) => c + 3);

  console.log('Successfully enrolled in:', course.title);
}
}