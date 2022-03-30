import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
import { Task } from '../../Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent implements OnInit {
  @Output() addTaskEvent: EventEmitter<Task> = new EventEmitter();
  text: string;
  day: string;
  reminder: boolean = false;
  message: string;
  showAddTask: boolean;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }

  ngOnInit(): void {}

  submit() {
    if (!this.text || !this.day) {
      this.message = 'Task and time required!';
      return;
    }
    this.message = '';
    let newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };

    this.addTaskEvent.emit(newTask);

    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
