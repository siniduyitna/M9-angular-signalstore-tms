import { Component, input, output } from "@angular/core";
import { RouterLink } from "@angular/router";
import { NgClass } from "@angular/common";
// ከ ui/course-card ተmodels ለመሄድ አንድ ፎልደር 
import { Course } from "../../models/course.model";

@Component({
  selector: "tms-course-card",
  standalone: true,
  imports: [RouterLink, NgClass], 
  templateUrl: "./course-card.html",
  styleUrl: "./course-card.scss",
})
export class CourseCardComponent {
  course = input.required<Course>();
  isEnrolled = input<boolean>(false);
  enrollClicked = output<Course>();
  onEnroll() {
    if (!this.isEnrolled()) {
      this.enrollClicked.emit(this.course());
    }
  }
  
}  
