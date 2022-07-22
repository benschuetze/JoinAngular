import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { EditTaskComponent } from '../edit-task/edit-task.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  constructor(private router: Router, private firestore: AngularFirestore, public dialog: MatDialog) { }
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

  editTask() {
    const dialogRef = this.dialog.open(EditTaskComponent, {
      data: {
        task: this.selectedTask
      }
    });
  }

  /**
   * 
   * @param event : Event Data;
   * @param containerId : Id of parent container for sorting of tasks and rendering accordingly 
   */

    drop(event: CdkDragDrop<object[]>, containerId:string) {
      this.selectedTask['boardState'] = containerId;
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
