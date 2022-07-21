import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  constructor(private router: Router, private firestore: AngularFirestore) { }
  tasks:object[];
  toDo:object[];
  inProgress:object[];
  testing:object[];
  done:object[];
  selectedTask:object;
  ngOnInit(): void {

    this.firestore
    .collection('tasks')
    .valueChanges()
    .subscribe((tasks:object[]) => {
      this.tasks = tasks;
      this.toDo = tasks.filter(t => t['boardState'] == 'to-do');
      this.inProgress = tasks.filter(t => t['boardState'] == 'in-progress');
      this.testing = tasks.filter(t => t['boardState'] == 'testing');
      this.done = tasks.filter(t => t['boardState'] == 'done');
      console.log('Stored Tasks:', this.tasks)
    })

  }

  selectTask(task:object) {
    this.selectedTask = task;
    console.log(this.selectedTask);
  }

  

    drop(event: CdkDragDrop<object[]>, containerId) {
      console.log('event data', event);
      console.log(this.selectedTask);
      this.selectedTask['boardState'] = containerId;
      console.log('boardstate change', this.selectedTask);
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

}
