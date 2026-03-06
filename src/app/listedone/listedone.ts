import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tasks } from '../tasks';
import { Menu } from '../menu/menu';
import { Task } from '../task';
import { Formtask } from '../formtask/formtask';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-listedone',
  imports: [CommonModule, Menu, Formtask],
  templateUrl: './listedone.html',
  styleUrl: './listedone.css',
})
export class Listedone implements OnInit {

  Liste: Task[] = [];
  private mysubscription: Subscription;
  
  constructor(private tasksService: Tasks) {
    this.mysubscription = new Subscription();
  }

  getDoneTasks(): Task[] {
    return this.Liste.filter(task => task.filtre === 'Done');
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
