import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Tasks } from '../tasks';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formtask',
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './formtask.html',
  styleUrl: './formtask.css',
})
export class Formtask {

  taskForm!: FormGroup;

  constructor(private tasks: Tasks, private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.taskForm = this.formBuilder.group({
      nom: ['', Validators.required]
    });
  }

  onSubmit(): void {
    const formValue = this.taskForm.value;
    this.tasks.addTask(formValue.nom);
    this.router.navigate(['/']);
  }
}
