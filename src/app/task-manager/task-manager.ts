import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tasks } from '../tasks';
import { Task } from '../task';
import { Menu } from '../menu/menu';
import { Formtask } from '../formtask/formtask';
import { TaskItem } from '../task-item/task-item';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-task-manager',
  imports: [CommonModule, Menu, Formtask, TaskItem],
  templateUrl: './task-manager.html',
  styleUrl: './task-manager.css',
})
export class TaskManager implements OnInit {

  allTasks: Task[] = [];
  currentFilter: string = 'All';
  private mysubscription: Subscription;

  constructor(private tasksService: Tasks) {
    this.mysubscription = new Subscription();
  }

  ngOnInit(): void {
    // PÈRE s'abonne au service pour recevoir toutes les tâches
    this.mysubscription = this.tasksService.tasks$.subscribe((tasks: Task[]) => {
      this.allTasks = tasks;
    });
  }

  ngOnDestroy(): void {
    this.mysubscription.unsubscribe();
  }

  // Retourne les tâches filtrées selon le filtre actif
  getFilteredTasks(): Task[] {
    if (this.currentFilter === 'Open') {
      return this.allTasks.filter(task => task.filtre === 'Open');
    } else if (this.currentFilter === 'Done') {
      return this.allTasks.filter(task => task.filtre === 'Done');
    }
    return this.allTasks; // All
  }

  onFilterChanged(filter: string): void {
    this.currentFilter = filter;
  }

  onTaskAdded(nom: string): void {
    this.tasksService.addTask(nom);
  }

  onTaskToggled(task: Task): void {
    this.tasksService.click(task);
  }
}
