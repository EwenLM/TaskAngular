import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formtask',
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './formtask.html',
  styleUrl: './formtask.css',
})
export class Formtask implements OnInit {

  taskForm!: FormGroup;
  
  // Émet vers le composant PÈRE quand une tâche est ajoutée
  @Output() taskAdded = new EventEmitter<string>();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.taskForm = this.formBuilder.group({
      nom: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.taskForm.valid) {
      const formValue = this.taskForm.value;
      // Émet l'événement vers le PÈRE au lieu d'appeler le service
      this.taskAdded.emit(formValue.nom);
      // Réinitialise le formulaire
      this.taskForm.reset();
    }
  }
}
