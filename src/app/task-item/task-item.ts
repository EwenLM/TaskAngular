import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../task';

@Component({
  selector: 'app-task-item',
  imports: [CommonModule],
  templateUrl: './task-item.html',
  styleUrl: './task-item.css',
})
export class TaskItem {
  // Reçoit la tâche du composant PÈRE
  @Input() task!: Task;
  
  // Émet vers le composant PÈRE quand la checkbox change
  @Output() taskToggled = new EventEmitter<Task>();

  onCheckboxChange(): void {
    this.taskToggled.emit(this.task);
  }
}
