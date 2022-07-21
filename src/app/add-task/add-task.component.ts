import { Component, OnInit, Input, Output} from '@angular/core';
import { Task } from 'src/models/task.class';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { toUnicode } from 'punycode';



@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  
  

  task:Task;


  title = '';
  category = '';
  description = '';
  date = '';
  urgency = '';
  assignedTo = '';

  constructor(private router: Router, private firestore: AngularFirestore) { 

  }

  ngOnInit(): void {
    this.task =new Task();
    this.firestore
    .collection('tasks')
    .valueChanges()
    .subscribe((tasks) => {
      console.log('Tasks update', tasks)
    })
  }

  goToBoard() {
    this.router.navigateByUrl('/board');
  }

  addNewTask(addTAskForm: NgForm) {
    let addedTask = {
      boardState: 'to-do',
      title: this.title,
      category: this.category,
      description: this.description,
      date: this.date,
      urgency: this.urgency
    }
    this.firestore
    .collection('tasks')
    .add(addedTask) 
    
    addTAskForm.resetForm();
  
  }

}
