import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu/menu';
import { Task } from '../task';
import { Tasks } from '../tasks';
import { Subscription } from 'rxjs/internal/Subscription';
import { CommonModule } from '@angular/common';
import { Formtask } from '../formtask/formtask';


@Component({
  selector: 'app-liste',
  imports: [Menu, CommonModule, Formtask],
  templateUrl: './liste.html',
  styleUrl: './liste.css',
})
export class Liste implements OnInit {

  Liste : Task[] = [];
  private mysubscription: Subscription;

  constructor(private tasksService: Tasks) {
    this.mysubscription = new Subscription();
  }

  ngOnInit(): void {
    this.mysubscription = this.tasksService.tasks$.subscribe((tasks: Task[]) => {
    this.Liste = tasks;
    });
  }

  ngOnDestroy(): void {
    this.mysubscription.unsubscribe();
  }

  OnClick(task: Task): void {
    this.tasksService.click(task);
  }
}
