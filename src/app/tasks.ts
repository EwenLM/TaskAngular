import { Injectable } from '@angular/core';
import { Task } from './task';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class Tasks {

  private tasksSubject = new BehaviorSubject<Task[]>([]);
  tasks$: Observable<Task[]> = this.tasksSubject.asObservable();


  tasks: Task[] = [];

  constructor() {
    this.emitTasks();
  }

  emitTasks() {
    this.tasksSubject.next(this.tasks);
  }

  addTask(nom: string) {
    const taskObject = { coche: false, nom: '', filtre: 'Open' };
    taskObject.nom = nom;
    this.tasks.push(taskObject);
    this.emitTasks();
  }

  click(task: Task): void {
    task.coche = !task.coche;
    task.filtre = task.coche ? 'Done' : 'Open';
    this.emitTasks();
  }

  getOpenTasks(): Task[] {
    return this.tasks.filter(task => task.filtre === 'Open');
  }

  getDoneTasks(): Task[] {
    return this.tasks.filter(task => task.filtre === 'Done');
  }
  
}
