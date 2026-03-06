import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tasks } from '../tasks';
import { Menu } from '../menu/menu';
import { Task } from '../task';
import { Formtask } from '../formtask/formtask';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-listeopen',
  imports: [CommonModule, Menu, Formtask],
  templateUrl: './listeopen.html',
  styleUrl: './listeopen.css',
})
export class Listeopen implements OnInit {

  Liste: Task[] = [];
  private mysubscription: Subscription;
  
  constructor(private tasksService: Tasks) {
    this.mysubscription = new Subscription();
  }

  getOpenTasks(): Task[] {
    return this.Liste.filter(task => task.filtre === 'Open');
  }

  OnClick(task: Task): void {
    this.tasksService.click(task);
  }

  ngOnInit(): void {
    this.mysubscription = this.tasksService.tasks$.subscribe((tasks: Task[]) => {
      this.Liste = tasks;
    });
  }

  ngOnDestroy(): void {
    this.mysubscription.unsubscribe();
  }

}
