import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task;
  @Output() deleteTaskClick: EventEmitter<Task> = new EventEmitter();
  @Output() toggleReminderClick: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;
  constructor() {}

  ngOnInit(): void {}

  deleteClick(task: Task) {
    this.deleteTaskClick.emit(task);
  }

  reminderClick(task: Task) {
    this.toggleReminderClick.emit(task);
  }
}
