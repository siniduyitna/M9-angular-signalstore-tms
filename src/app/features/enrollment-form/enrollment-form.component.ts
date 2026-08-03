import { Component, inject, signal } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  Validators,
  ReactiveFormsModule,
  FormArray,
} from '@angular/forms';

@Component({
  selector: 'app-enrollment-form',
  standalone: true,
  imports: [ReactiveFormsModule], // Required: standard reactive form directives
  templateUrl: './enrollment-form.component.html',
  styleUrl: './enrollment-form.component.scss'
})
export class EnrollmentFormComponent {
  private fb = inject(FormBuilder);

  // Signal for tracking form submission state
  submitted = signal(false);

  // NonNullable form group construction
  form = this.fb.nonNullable.group({
    studentId: [
      '',
      [Validators.required, Validators.pattern('^STU-[0-9]{4}$')],
    ],
    courseId: ['', Validators.required],
    term: ['Fall 2026', Validators.required], // Pre-filled with default term
    notes: [''], // Optional field
    backupCourses: this.fb.array<FormControl<string>>([]), // Dynamic form array
  });

  // Getter property shortcut for backupCourses array
  get backups() {
    return this.form.controls.backupCourses;
  }

  // Dynamic row addition
  addBackup() {
    this.backups.push(
      this.fb.control('', {
        nonNullable: true,
        validators: Validators.required,
      })
    );
  }

  // Dynamic row removal by index
  removeBackup(index: number) {
    this.backups.removeAt(index);
  }

  submit() {
    if (this.form.valid) {
      // Extract full form data as JSON (including any disabled elements)
      const payload = this.form.getRawValue();
      console.log('Enrollment payload:', payload);
      this.submitted.set(true);
    } else {
      // Force all validation messages to display by marking pristine fields as touched
      this.form.markAllAsTouched();
    }
  }
}