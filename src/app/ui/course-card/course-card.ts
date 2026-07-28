import { Component, input, output } from "@angular/core";
import { RouterLink } from "@angular/router";
// ከ ui/course-card ተነስተህ ወደ models ለመሄድ አንድ ፎልደር ወደ ላይ (../) መውጣት ብቻ ይበቃሃል
import { Course } from "../../models/course.model";

@Component({
  selector: "tms-course-card",
  standalone: true,
  imports: [RouterLink],
  templateUrl: "./course-card.html", // .component የሚለውን ተወው
  styleUrl: "./course-card.scss",    // .component የሚለውን ተወው
})
export class CourseCardComponent {
  course = input.required<Course>();
  enrollClicked = output<Course>();
}